const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const { 
    getIngredients, 
    addIngredient,
    getIngredient,
    updateIngredient,
    deleteIngredient 
} = require('../controllers/ingredients');
const advancedResults = require('../middleware/advancedResults');
const Ingredient = require('../models/Ingredient');

const router = express.Router();

router.route('/')
    .get(advancedResults(Ingredient), getIngredients)
    .post(protect, authorize('admin', 'staff'), addIngredient);

router.route('/:id')
    .get(getIngredient)
    .put(protect, authorize('admin', 'staff'), updateIngredient)
    .delete(protect, authorize('admin', 'staff'), deleteIngredient);

module.exports = router;