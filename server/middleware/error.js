const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err}
    error.message = err.message;
    
    //Log to the console for dev
    console.log(err.stack.brightRed);

    //Mongoose bad ObcjectId
    if (err.name === "CastError") {
        const message = `Pizza not find with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Server Error'
    });
};

module.exports = errorHandler;