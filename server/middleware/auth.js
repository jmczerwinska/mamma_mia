const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const User = require('..//models/User');

exports.protect = asyncHandler(async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log(token)

    } 
    // else if (req.cookies.token) {
    //     token = req.cookies.token;
    // }

    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();    
  
});