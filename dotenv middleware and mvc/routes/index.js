const router=require('express').Router();
const authrouter=require('./auth');
const postrouter=require('./post');

router.use('/post',postrouter);
router.use('/auth',authrouter);

module.exports=router;