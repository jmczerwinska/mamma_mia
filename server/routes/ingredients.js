const express = require('express');
const router = express.Router();
const { getIngredients, addIngredient, getIngredient, updateIngredient } = require('../controllers/ingredients');

router.route('/')
    .get(getIngredients)
    .post(addIngredient);

router.route('/:id')
    .get(getIngredient)
    .put(updateIngredient)
    .delete();

module.exports = router;