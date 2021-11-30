const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderNumber: {
        type: Number,
        default: Date.now
    },
    client: {
        type: String,
        required: [true, 'Add your name']
    },
    email: {
        type: String,
        required: [true, 'Add e-mail']
    },
    phone: {
        type: String,
        required: [true, 'Add phone number']
    },
    status: {
        type: String,
        required: [true, 'Please add order status'],
        enum: ['accepted', 'in progress', 'completed', 'canceled'],
        default: 'accepted'
    },
    list: [],
    deliveryAdress: {
        street: {
            type: String,
            required: [true, 'Add street']
        },
        buildingNumber: {
            type: Number,
            required: [true, 'Add building number']
        },
        localNumber: Number,
        city: {
            type: String,
            enum: {values: ['Warszawa'], message: 'Delivery awailable only in Warsaw'},
            required: [true, 'Add city']
        },
    },
    comment: {
        type: String,
        required: [true, 'Add comment']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);