const crypto = require('crypto');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const User = require('..//models/User');
const ErrorResponse = require("../utils/errorResponse");


//@desc     Create user
//@route    POST /api/v1/auth/register
//@access   Public
exports.register = asyncHandler(async (req, res, next) => {
    const { email, password, name, lastName, role } = req.body;

    const user = await User.create({
        email,
        password,
        name,
        lastName,
        role
    });

    sendTokenResponse(user, 201, res); 
});


//@desc     Login user
//@route    POST /api/v1/auth/login
//@access   Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    //Email and password validation
    if (!email || !password) {
        return next(
            new ErrorResponse('Please provide an e-mail and password', 400)
        );
    }

    //Check user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(
            new ErrorResponse('Invalid credentials', 401)
        );
    }

    //Check if password maches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(
            new ErrorResponse('Invalid credentials', 401)
        );
    }
    
    sendTokenResponse(user, 201, res);
}); 


//@desc     Get current logged in user
//@route    GET /api/v1/auth/me
//@access   Privat
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = req.user;
    // const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user 
    });
});


//@desc     Update user details
//@route    PUT /api/v1/auth/updatedetails
//@access   Privat
exports.updateDetails = asyncHandler(async (req, res, next) => {    
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true
    });
    
    res.status(200).json({
        success: true,
        data: user 
    });
});


//@desc     Update password
//@route    PUT /api/v1/auth/updatepassword
//@access   Privat
exports.updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    if(!(await user.matchPassword(req.body.currentPassword))) {
        return next(
            new ErrorResponse('Incorrect password', 401)
        );
    }

    user.password = req.body.newPassword;
    await user.save({ validateModifiedOnly: true });

    sendTokenResponse(user, 200, res);
});



//@desc     Forgot password
//@route    POST /api/v1/auth/forgotpassword
//@access   Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if(!user) {
        return next(
            new ErrorResponse('There is no user with that email', 404)
        );
    }

    //Get reseet token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset URL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;

    const text = `You are reversing this email because you (or someone else) has requested the reset of the password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
            
        await sendEmail({
            email: user.email,
            subject: 'Reset password request',
            text
        });

        res.status(200).json({succes: true, data: 'Email send'});

    } catch (error) {
        console.log(error);

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        res.status(500).json({succes: false, data: 'Email could not send'});     
    }
});


//@desc     Reset password
//@route    PUT /api/v1/auth/resetpassword/:resettoken
//@access   Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
    //Get hashed token
    const resetPasswordToken  = crypto
        .createHash('sha256')
        .update(req.params.resettoken)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if(!user) {
       return next(
           new ErrorResponse('Invalid token.', 400)
        );
    }

    //Set new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateModifiedOnly: true });

    sendTokenResponse(user, 201, res);    
});


//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignJwtToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
    };
    
    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({ 
            success: true,
            token
        });  
};