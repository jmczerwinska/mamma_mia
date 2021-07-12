const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please adda ingredient name']
    },
    price: {
        type: Number,
        required: [true, 'Please add ingredient price']
    }
});

module.exports = mongoose.model('Ingredient', IngredientSchema);