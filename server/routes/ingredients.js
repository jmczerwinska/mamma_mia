const express = require('express');
const { protect , authorize} = require('../middleware/auth');
const { 
    getIngredients, 
    addIngredient,
    getIngredient,
    updateIngredient,
    deleteIngredient 
} = require('../controllers/ingredients');

const router = express.Router();

router.route('/')
    .get(getIngredients)
    .post(protect, authorize('admin', 'staff'), addIngredient);

router.route('/:id')
    .get(getIngredient)
    .put(protect, authorize('admin', 'staff'), updateIngredient)
    .delete(protect, authorize('admin', 'staff'), deleteIngredient);

module.exports = router;