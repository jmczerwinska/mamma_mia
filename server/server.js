const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

const colors = require('colors');

//Midllewares
const errorHandler = require('./middleware/error');

const connectDB = require('./config/db');

//Route files
const menu = require('./routes/menu');
const ingredients = require('./routes/ingredients');
const authentication = require('./routes/authentication');
const users = require('./routes/user');
const reviews = require('./routes/reviews');

//add env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//Body parse
app.use(express.json());

//Cookie parse
app.use(cookieParser());

//Sanitize data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

//Prevent XSS attacks
app.use(xss());

//Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

//Enable CORS
app.use(cors());

app.use('/api/v1/menu', menu);
app.use('/api/v1/ingredients', ingredients);
app.use('/api/v1/auth', authentication);
app.use('/api/v1/users', users);
app.use('/api/v1/reviews', reviews);

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
