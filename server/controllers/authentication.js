const asyncHandler = require("../middleware/async");
const User = require('..//models/User');
const ErrorResponse = require("../utils/errorResponse");


//@desc     Create user
//@route    POST /api/v1/auth/register
//@access   Public
exports.register = asyncHandler(async (req, res, next) => {
    const { email, password, name, lastName, role } = req.body;
    console.log(req.body)

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
        return next(new ErrorResponse('Please provide an e-mail and password', 400));
    };

    //Check user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    };

    //Check if password maches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    };
    
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