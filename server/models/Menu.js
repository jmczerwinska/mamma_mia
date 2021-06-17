const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        requaried: [true, 'Please add name'],
        trim: true,
        maxlength: [50, 'Name can not be longer than 50 characters']
    },
    category: {
        type: String,
        requaried: [true, 'Please choose category'],
        enum: ['rossa', 'bianca']
    },
    ingredients: {
        type: [String],
        requaried: [true, 'Please add ingredients'],
        trim: true
    },
    price: {
        s: {
            type: Number,
            min: [1, 'Price can not be smaller than 1']
        },
        m: {
            type: Number,
            min: [1, 'Price can not be smaller than 1']
        },
        l: {
            type: Number,
            min: [1, 'Price must be at least 1']
        },
    }
});

module.exports = mongoose.model('Menu', MenuSchema);