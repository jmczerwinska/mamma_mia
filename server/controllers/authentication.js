const asyncHandler = require("../middleware/async");
const User = require('..//models/User');


//@desc     Add new ingredient
//@route    POST /api/v1/ingredients
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
    
    res.status(201).json({ 
        success: true
    });  
});