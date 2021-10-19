const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderNumber: {
        type: Number,
        default: Date.now
    },
    status: {
        type: String,
        required: [true, 'Please add order status'],
        enum: ['accepted', 'in progress', 'completed', 'canceled']
    },
    list: [],
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
    }
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);