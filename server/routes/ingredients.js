const express = require('express');
const { protect } = require('../middleware/auth');
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
    .post(protect, addIngredient);

router.route('/:id')
    .get(getIngredient)
    .put(protect, updateIngredient)
    .delete(protect, deleteIngredient);

module.exports = router;