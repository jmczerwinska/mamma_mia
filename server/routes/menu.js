const express = require('express');
const { getMenu, getPizza, addPizza, updatePizza, deletePizza } = require('../controllers/menu');

const router = express.Router();

router.route('/')
    .get(getMenu)
    .post(addPizza)

router.route('/:id')
    .get(getPizza)
    .put(updatePizza)
    .delete(deletePizza)


module.exports = router;