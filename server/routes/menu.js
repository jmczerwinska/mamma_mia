const express = require('express');
const { getMenu, getPizza, addPizza, updatePizza, deletePizza } = require('../controllers/menu');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(getMenu)
    .post(protect, addPizza);

router.route('/:id')
    .get(getPizza)
    .put(protect, updatePizza)
    .delete(protect, deletePizza);


module.exports = router;