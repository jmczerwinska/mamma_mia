const express = require('express');
const { authorize, protect } = require('../middleware/auth');
const {
    getOrders,
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/orders');

const router = express.Router();

router.route('/')
    .get(getOrders)
    .post(addOrder);

router.route('/:id')
    .get(getOrder)
    .put(protect, authorize('admin', 'staff'), updateOrder)
    .delete(protect, authorize('admin', 'staff'), deleteOrder)

module.exports = router;