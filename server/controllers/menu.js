const Menu = require('../models/Menu');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//@desc     Get whole menu
//@route    GET /api/v1/menu
//@access   Public
exports.getMenu = asyncHandler(async (req, res, next) => {
        const menu = await Menu.find();

        res.status(200).json({ 
            success: true,
            count: menu.length,
            data: menu
        });
});

//@desc     Get one pizza
//@route    GET /api/v1/menu/:id
//@access   Public
exports.getPizza = asyncHandler(async (req, res, next) => {
        const pizza = await Menu.findById(req.params.id);
        
        if(!pizza) {
            return next(
                new ErrorResponse(`Pizza not find with id of ${req.params.id}`, 404)
            );
        };
        
        res.status(200).json({ 
            success: true,
            data: pizza
        });  
});

//@desc     Add new pizza
//@route    POST /api/v1/menu
//@access   Private
exports.addPizza = asyncHandler(async (req, res, next) => {
        const pizza = await Menu.create(req.body);
        
        res.status(201).json({ 
            success: true, 
            data: pizza 
        });  
});

//@desc     Update single pizza
//@route    PUT /api/v1/menu/:id
//@access   Private
exports.updatePizza = asyncHandler(async (req, res, next) => {
        const pizza = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!pizza) {
            return next(
                new ErrorResponse(`Pizza not find with id of ${req.params.id}`, 404)
            );
        };

        res.status(200).json({
            success: true, 
            data: pizza 
        });
});

//@desc     Delete single pizza
//@route    DELETE /api/v1/menu/:id
//@access   Private
exports.deletePizza = asyncHandler(async (req, res, next) => {
        const pizza = await Menu.findByIdAndDelete(req.params.id,);

        if (!pizza) {
            return next(
                new ErrorResponse(`Pizza not find with id of ${req.params.id}`, 404)
            );
        };

        res.status(200).json({
            success: true, 
            data: {}
        });
});