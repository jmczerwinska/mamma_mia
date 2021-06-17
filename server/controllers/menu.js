const Menu = require('../models/Menu');

//@desc     Get whole menu
//@route    GET /api/v1/menu
//@access   Public
exports.getMenu = async (req, res, next) => {
    try {
        const menu = await Menu.find();

        res.status(200).json({ 
            success: true,
            data: menu
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
    } 
};

//@desc     Get one pizza
//@route    GET /api/v1/menu/:id
//@access   Public
exports.getPizza = async (req, res, next) => {
    try {
        const pizza = await Menu.findById(req.params.id);
        
        if(!pizza) {
            return res.status(404).json({
                success: false
            })
        };
        
        res.status(200).json({ 
            success: true,
            data: pizza
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
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
        res.status(400).json({
            success: false
        });
    }  
};

//@desc     Update pizza
//@route    PUT /api/v1/menu/:id
//@access   Private
exports.updatePizza = async (req, res, next) => {
    try {
        const pizza = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!pizza) {
            res.status(400).json({
                success: false
            })
        };

        res.status(200).json({
            success: true, 
            data: pizza 
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
};

//@desc     Delete pizza
//@route    DELETE /api/v1/menu/:id
//@access   Private
exports.deletePizza = async (req, res, next) => {
    try {
        const pizza = await Menu.findByIdAndDelete(req.params.id,);

        if (!pizza) {
            res.status(400).json({
                success: false
            })
        };

        res.status(200).json({
            success: true, 
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
};