const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
     email: {
        type: String,
        reqired: [true, 'Please add an e-mail'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Please add a valid e-mail'
        ],
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

//Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

module.exports = mongoose.model('User', UserSchema);