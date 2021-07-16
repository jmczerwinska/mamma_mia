const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('./async');
const User = require('..//models/User');

const protect = asyncHandler(async (req,res,next) => {
    let token;
    // const authorization = req.headers.authorization;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log(token)

    } 
    // else if (req.cookies.token) {
    //     token = req.cookies.token;
    // }

    if (!token) {
        next( new ErrorResponse('Not authorize to access this route', 401));
    }

    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();    
  
});

module.exports = protect;