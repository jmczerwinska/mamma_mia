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
    res.status(201).json({ 
        success: true
    });  
});