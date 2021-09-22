const express = require('express');
const { getReviews } = require('../controllers/reviews');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(getReviews);

module.exports = router;

