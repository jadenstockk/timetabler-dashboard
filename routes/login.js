const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('oldold-login', {
        user: null
    });
})

module.exports = router;