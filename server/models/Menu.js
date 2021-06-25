const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be longer than 50 characters']
    },
    category: {
        type: String,
        required: [true, 'Please choose category'],
        enum: ['rossa', 'bianca']
    },
    ingredients: {
        type: [String],
        required: [true, 'Please add ingredients'],
        trim: true
    },
    price: {
        s: {
            type: Number,
            required: [true, 'Please add price for small pizza'],
            min: [1, 'Price can not be smaller than 1']
        },
        m: {
            type: Number,
            required: [true, 'Please add price for medium pizza'],
            min: [1, 'Price can not be smaller than 1']
        },
        l: {
            type: Number,
            required: [true, 'Please add price for large pizza'],
            min: [1, 'Price must be at least 1']
        },
    }
});

module.exports = mongoose.model('Menu', MenuSchema); 