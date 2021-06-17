const Menu = require('../models/Menu');


//@desc     Get whole menu
//@route    GET /api/v1/menu
//@access   Public
exports.getMenu = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show menu' });
};

//@desc     Get one pizza
//@route    GET /api/v1/menu/:id
//@access   Public
exports.getPizza = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show pizza ${req.params.id}` })
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
        })
    }
    
};

//@desc     Update pizza
//@route    PUT /api/v1/menu/:id
//@access   Private
exports.updatePizza = (req, res, next) => {
    res.status(201).json({ success: true, msg: `Update pizza ${req.params.id}` });
};

//@desc     Delete pizza
//@route    DELETE /api/v1/menu/:id
//@access   Private
exports.deletePizza = (req, res, next) => {
    res.status(201).json({ success: true, msg: `Delete pizza ${req.params.id}` })
};