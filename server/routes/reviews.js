const express = require('express');
const { 
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview
} = require('../controllers/reviews');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(getReviews)
    .post(protect, authorize('user'), addReview);

router.route('/:id')
    .get(getReview)
    .put(protect, authorize('user'), updateReview)
    .delete(protect, authorize('user', 'admin'), deleteReview);

module.exports = router;

