const router = require('express').Router();
const requireUser = require('../Middlewares/requireUser');
const authRouter = require('./auth');
const postRouter = require('./post');
// consr requireUser
router.use('/auth', authRouter);
router.use('/post', requireUser, postRouter);


module.exports = router;