const router=require('express').Router();
const controller=require('../controllers/auth');

router.post('/signup',controller.signupcontroller);

router.post('/login',controller.loginController);

module.exports=router;