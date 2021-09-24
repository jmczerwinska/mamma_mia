const Review = require('../models/Review');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get reviews
//@route    GET /api/v1/reviews
//@access   Public
exports.getReviews = asyncHandler(async (req, res, next) => {
    const reviews = await Review.find();

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
        return next(new ErrorResponse(`Review not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: review
    });
});