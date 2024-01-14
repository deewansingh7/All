const router=require('express').Router();

router.get("/",(req,res)=>{
    res.send({
        name:'deewan',
        age:18
    })
})

router.post('/all',(req,res)=>{
    res.send("kaise ho")
})

module.exports=router;