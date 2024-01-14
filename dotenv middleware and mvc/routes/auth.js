const router=require('express').Router();

router.post('/login',(req,res)=>{
    res.send("this is for login")
});

router.post('/signup',(req,res)=>{
    res.send("This is for signup")
});

module.exports=router;