const express = require('express');
const { getReviews, getReview } = require('../controllers/reviews');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(getReviews);

router.route('/:id')
    .get(getReview);

module.exports = router;

