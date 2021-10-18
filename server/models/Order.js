const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderNumber: {
        type: Number,
        required: [true, 'Please add order number'],
        defaul: Date.now
    },
    status: {
        type: String,
        required: [true, 'Please add order status'],
        enum: ['accepted', 'in progress', 'completed', 'canceled']
    },
    list: [String],
    deliveryAdress: {
        name: String,
        street: String,
        buildingNumber: Number,
        localNumber: Number,
        postCode: String,
        city: String
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);