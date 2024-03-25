const express = require('express');
const router = express.Router();

const {
    getCurrentUserPlaces
} = require('../controllers/placeController');

router.route('/user-places').get(getCurrentUserPlaces);

module.exports = router;