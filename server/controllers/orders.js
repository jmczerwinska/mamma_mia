const Order = require('../models/Order');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');


//@desc     Get orders
//@route    GET /api/v1/orders
//@access   Public
exports.getOrders = asyncHandler(async (req, res, next) => {
    const orders = await Order.find().populate({
        path: 'user',
        select: 'name lastName adress'
    });

    res.status(200).json({
        success: true,
        count: orders.length,
        data: orders
    });
});


//@desc     Get order
//@route    GET /api/v1/orders/:id
//@access   Public
exports.getOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById().populate({
        path: 'user',
        select: 'name lastName adress'
    });

    res.status(200).json({
        success: true,
        data: order
    });
});


//@desc     Add order
//@route    POST /api/v1/orders
//@access   Public
exports.addOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.create(req.body);

    res.status(201).json({
        success: true,
        data: order
    });
});


//@desc     Update order
//@route    PUT /api/v1/orders/:id
//@access   Privat
exports.updateOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!order) {
        return next(
            new ErrorResponse(`Order not found with id of ${req.params.id}`, 404)
        )
    };

    res.status(200).json({
        success: true,
        data: order
    });
});


//@desc     Update order
//@route    DELETE /api/v1/orders/:id
//@access   Privat
exports.deleteOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if(!order) {
        return next(
            new ErrorResponse(`Order not found with id of ${req.params.id}`, 404)
        )
    };

    res.status(200).json({
        success: true,
        data: {}
    });
});