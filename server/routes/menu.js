const express = require('express');
const router = express.Router();

const { getMenu, getPizza, addPizza, updatePizza, deletePizza } = require('../controllers/menu');

router.route('/')
    .get(getMenu)
    .post(addPizza)

router.route('/:id')
    .get(getPizza)
    .put(updatePizza)
    .delete(deletePizza)


module.exports = router;