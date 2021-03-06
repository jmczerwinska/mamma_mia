const express = require('express');
const { getMenu, getPizza, addPizza, updatePizza, deletePizza } = require('../controllers/menu');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(getMenu)
    .post(protect, authorize('admin', 'staff'), addPizza);

router.route('/:id')
    .get(getPizza)
    .put(protect, authorize('admin', 'staff'), updatePizza)
    .delete(protect, authorize('admin', 'staff'), deletePizza);


module.exports = router;