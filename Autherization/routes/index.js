const router=require('express').Router();
const authrouter=require('./auth');

router.use('/auth',authrouter);

module.exports=router;