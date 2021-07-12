const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: "./config/config.env" });

const Menu = require('./models/Menu');
const Ingredient = require('./models/Ingredient');

const asyncHandler = require('./middleware/async');

//connect to DB
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
});

const menu = JSON.parse(fs.readFileSync(`${__dirname}/_data/menu.json`), 'utf-8');
const ingredients = JSON.parse(fs.readFileSync(`${__dirname}/_data/ingredients.json`), 'utf-8');

//Import into DB
const importData = asyncHandler( async(req, res, next) => {
        await Menu.create(menu);
        await Ingredient.create(ingredients);

        console.log('Data imported...'.green.inverse);
        process.exit();
});

//Delete from DB
const destroyData = asyncHandler( async (req, res, next) => {
        await Menu.deleteMany();
        await Ingredient.deleteMany();

        console.log('Data destroyed...'.red.inverse);
        process.exit();
});

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    destroyData();
};