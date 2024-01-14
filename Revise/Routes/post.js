const router = require('express').Router();
const { postController } = require('../Controllers/postController');

router.get('/all', postController);

module.exports = router;