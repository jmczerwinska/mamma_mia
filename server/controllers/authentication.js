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

    const token = user.getSignJwtToken();
    
    res.status(201).json({ 
        success: true,
        token
    });  
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
    }

    const token = user.getSignJwtToken();
    res.status(201).json({ 
        success: true,
        token
    });  
}); 