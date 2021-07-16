const asyncHandler = require("../middleware/async");
//@desc     Add new ingredient
//@route    POST /api/v1/ingredients
//@access   Private

exports.register = asyncHandler(async (req, res, next) => {
    
    res.status(201).json({ 
        success: true, 
    });  
});