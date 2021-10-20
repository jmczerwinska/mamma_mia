const Ingredient = require('../models/Ingredient');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const advancedResults = require('../middleware/advancedResults');


//@desc     Get all ingredients
//@route    GET api/v1/ingredients
//@access   Public
exports.getIngredients = asyncHandler( async(req,res,next) => {
    res.status(200).json(advancedResults);
});


//@desc     Get one ingredient
//@route    GET api/v1/ingredients/:id
//@access   Public
exports.getIngredient = asyncHandler( async(req,res,next) => {
    const ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) {
        return next (
            new ErrorResponse(`Ingredient not find with id of ${req.params.id}`, 404)
        )
    };

    res.status(200).json({ 
        success: true,
        data: ingredient
    });
});

//@desc     Add new ingredient
//@route    POST /api/v1/ingredients
//@access   Private
exports.addIngredient = asyncHandler(async (req, res, next) => {
    const ingredient = await Ingredient.create(req.body);
    
    res.status(201).json({ 
        success: true, 
        data: ingredient
    });  
});

//@desc     Update ingredient
//@route    PUT /api/v1/ingredients/:id
//@access   Private
exports.updateIngredient = asyncHandler(async (req, res, next) => {
    const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!ingredient) {
        return next (
            new ErrorResponse(`Ingredient not find with id of ${req.prams.id}`, 404)
        )
    };
    
    res.status(200).json({ 
        success: true, 
        data: ingredient
    });  
});

//@desc     Delete single ingredient from DB
//@route    DELETE api/v1/ingredients/:id
//@access   Private
exports.deleteIngredient = asyncHandler (async (req, res, next) => {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);

    if (!ingredient) {
        return next (
            new ErrorRespnse(`Ingredient not found with id of ${req.params.id}`,404)
        )
    };

    res.status(200).json({
        success: true,
        data: {}
    })
})