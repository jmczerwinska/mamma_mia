const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const colors = require('colors');

//Midllewares
const errorHandler = require('./middleware/error');

const connectDB =require('./config/db');

//Route files
const menu = require('./routes/menu');
const ingredients = require('./routes/ingredients');
const authentication = require('./routes/authentication');
const users = require('./routes/user');

//add env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//Body parse
app.use(express.json());

//Cookie parse
app.use(cookieParser());

app.use('/api/v1/menu', menu);
app.use('/api/v1/ingredients', ingredients);
app.use('/api/v1/auth', authentication);
app.use('/api/v1/users', users);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

//Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close server & exit procces
    server.close(() => process.exit(1));
});
