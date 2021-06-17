const express = require('express');
const dotenv = require('dotenv');
const connectDB =require('./config/db')
//Route files
const menu = require("./routes/menu");

//add env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use('/api/v1/menu', menu)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));