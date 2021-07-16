const mongoose = require('mongoose');

const User = mongoose.Schema({
     email: {
        type: String,
        reqired: [true, 'Please add an e-mail'],
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'The e-mail adress is incorrect'],
        unique: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'staff'],
        required: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [8, 'Password can not be shorter than 8 characters'],
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: [true, 'Please add name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please add name'],
    }
});