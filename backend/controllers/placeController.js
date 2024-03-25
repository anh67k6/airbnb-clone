const Place = require('../models/Place');
const jwt = require('jsonwebtoken');

exports.getCurrentUserPlaces = async (req, res) => {
    try {
        const { token } = req.cookies;
        logger.info(token);
        const userData = jwt.verify(token, process.env.JWT_SECRET);
        console.log(userData);
        const { id } = userData;
        const places = await Place.find({ owner: id });
        res.json(places);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
