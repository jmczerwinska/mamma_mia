const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Please add a ingredient name']
    },
    price: {
        type: Number,
        required: [true, 'Please add a ingredient price']
    }
});

module.exports = mongoose.model('Ingredient', IngredientSchema);