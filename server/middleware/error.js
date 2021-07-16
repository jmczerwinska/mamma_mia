const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err}
    error.message = err.message;
    
    //Log to the console for dev
    console.log(err);

    //Mongoose bad ObcjectId
    if (err.name === 'CastError') {
        const message = `Incorrect id format`;
        error = new ErrorResponse(message, 404);
    };

    //Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    //Mongoose valitaion error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    };

    //JsonWebToken validation error
    if (err.name === 'JsonWebTokenError') {
        const message = 'Not authorize to access this route';
        error = new ErrorResponse(message, 401);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Server Error'
    });
};

module.exports = errorHandler;