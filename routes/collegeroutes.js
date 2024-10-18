const express = require('express');
const router = express.Router();
const colleges = require('../data/colleges.json');

// Get all colleges
router.get('/', (req, res) => {
    res.json(colleges);
});

// Get a college by name
router.get('/:name', (req, res) => {
    const college = colleges.find(c => c.name.toLowerCase() === req.params.name.toLowerCase());
    if (college) {
        res.json(college);
    } else {
        res.status(404).send('College not found');
    }
});

module.exports = router;
