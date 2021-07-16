const express = require('express');
const { getIngredients, addIngredient, getIngredient, updateIngredient } = require('../controllers/ingredients');

const router = express.Router();

router.route('/')
    .get(getIngredients)
    .post(addIngredient);

router.route('/:id')
    .get(getIngredient)
    .put(updateIngredient)
    .delete();

module.exports = router;