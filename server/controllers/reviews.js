const Review = require('../models/Review');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get reviews
//@route    GET /api/v1/reviews
//@access   Public
exports.getReviews = asyncHandler(async (req, res, next) => {
    const reviews = await Review.find().populate({
        path: 'user',
        select: 'name lastName'
    });

    res.status(200).json({
        success: true,
        count: reviews.length,
        data: reviews
    });
});


//@desc     Get single review
//@route    GET /api/v1/reviews/:id
//@access   Public
exports.getReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id).populate({
        path: 'user',
        select: 'name lastName'
    });

    if(!review) {
        return next(
            new ErrorResponse(`Review not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        data: review
    });
});


//@desc     Add review
//@route    POST /api/v1/reviews
//@access   Public
exports.addReview = asyncHandler(async (req, res, next) => {
    req.body.user = req.user.id;

    const review = await Review.create(req.body);

    res.status(201).json({
        success: true,
        data: review
    });
});


//@desc     Edit review
//@route    PUT /api/v1/reviews/:id
//@access   Privat
exports.updateReview = asyncHandler(async (req, res, next) => {
    let review = await Review.findById(req.params.id);
    
    if(!review) {
        return next(
            new ErrorResponse(`Review not found with id of ${req.params.id}`, 404)
        );
    }
 
    if(review.user.toString() !== req.user.id) {
        return next(
            new ErrorResponse('Not authorized to update review', 401)
        );
    }

    review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        data: review
    });
});


//@desc     Delete single review
//@route    DELETE /api/v1/reviews/:id
//@access   Privat
exports.deleteReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    if(!review) {
        return next(
            new ErrorResponse(`Review not found with id of ${req.params.id}`, 404)
        );
    }
 
    if(review.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(
            new ErrorResponse('Not authorized to update review', 401)
        );
    }

    await review.deleteOne();

    res.status(201).json({
        success: true,
        data: []
    });
});