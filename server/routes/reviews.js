const express = require('express');
const { 
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview
} = require('../controllers/reviews');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');
const Review = require('../models/Review');

const router = express.Router();

router.route('/')
    .get(advancedResults(Review, {
        path: 'user',
        select: 'name lastName'
    }), getReviews)
    .post(protect, authorize('user'), addReview);

router.route('/:id')
    .get(getReview)
    .put(protect, authorize('user'), updateReview)
    .delete(protect, authorize('user', 'admin'), deleteReview);

module.exports = router;

