const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const { 
    getMenu,
    getPizza,
    addPizza,
    updatePizza,
    deletePizza
} = require('../controllers/menu');
const advancedResults = require('../middleware/advancedResults');
const Menu = require('../models/Menu');


const router = express.Router();

router.route('/')
    .get(advancedResults(Menu), getMenu)
    .post(protect, authorize('admin', 'staff'), addPizza);

router.route('/:id')
    .get(getPizza)
    .put(protect, authorize('admin', 'staff'), updatePizza)
    .delete(protect, authorize('admin', 'staff'), deletePizza);


module.exports = router;