const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB =require('./config/db')

//Route files
const menu = require("./routes/menu");

//add env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use('/api/v1/menu', menu);


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
