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