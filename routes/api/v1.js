const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Main APIv1 Page');
});

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/communities', require('./communities'));
router.use('/me', require('./me'));
router.use('/search', require('./search'));
router.use('/memes', require('./memes'));
router.use('/templates', require('./templates'));

module.exports = router;
