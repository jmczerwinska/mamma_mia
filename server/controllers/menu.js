const Menu = require('../models/Menu');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get whole menu
//@route    GET /api/v1/menu
//@access   Public
exports.getMenu = async (req, res, next) => {
    try {
        const menu = await Menu.find();

        res.status(200).json({ 
            success: true,
            count: menu.length,
            data: menu
        });
    } catch (error) {
        next(error);
    } 
};

//@desc     Get one pizza
//@route    GET /api/v1/menu/:id
//@access   Public
exports.getPizza = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }    
};

//@desc     Add new pizza
//@route    POST /api/v1/menu
//@access   Private
exports.addPizza = async (req, res, next) => {
    try {
        const pizza = await Menu.create(req.body);
        
        res.status(201).json({ 
            success: true, 
            data: pizza 
        });  
    } catch (error) {
        next(error);
    }
};

//@desc     Update single pizza
//@route    PUT /api/v1/menu/:id
//@access   Private
exports.updatePizza = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

//@desc     Delete single pizza
//@route    DELETE /api/v1/menu/:id
//@access   Private
exports.deletePizza = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};