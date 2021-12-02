const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength:[30, 'Title can not be longer than 30 characters.'],
        trim: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [true, 'Please add a raiting.']
    },
    text: {
        type: String,
        maxlength: [500, 'Review can not be longer than 300 characters.'],
        required: [true, 'Please write rewiev.'],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }

});

module.exports = mongoose.model('Review', ReviewSchema);