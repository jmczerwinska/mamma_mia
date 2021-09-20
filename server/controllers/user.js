const asyncHandler = require('../middleware/async');
const User = require('..//models/User');
const ErrorResponse = require("../utils/errorResponse");


//@desc     Get all users
//@route    GET /api/v1/users
//@access   Privat/Admin
exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        count: users.length,
        data: users 
    })
});


//@desc     Get user by id
//@route    GET /api/v1/users/:id
//@access   Privat/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next (
            new ErrorRespnse(`User not found with id of ${req.params.id}`, 404)
        )
    };

    res.status(200).json({
        success: true,
        data: user
    })
});


//@desc     Create user
//@route    POST /api/v1/users
//@access   Privat/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user
    })
});


//@desc     Update user profile
//@route    PUT /api/v1/users/:id
//@access   Privat/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    if (req.body.password) {
        return next (
            new ErrorResponse('Admin is not allowed to change user password', 403)
        );
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidaors: true
    });

    if (!user) {
        return next (
            new ErrorRespnse(`User not found with id of ${req.params.id}`, 404)
        )
    };

    res.status(200).json({
        success: true,
        data: user
    })
});


//@desc     Delite user profile
//@route    DELETE /api/v1/users/:id
//@access   Privat/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => { 
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next (
            new ErrorRespnse(`User not found with id of ${req.params.id}`, 404)
        )
    };

    res.status(200).json({
        success: true,
        data: {}
    })
});