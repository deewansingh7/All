const dotenv=require('dotenv');
dotenv.config({path:'./secret.env'});
const express=require('express');
// const postrouter=require('./routes/post');
// const authrouter=require('./routes/auth');
const mainrouter=require('./routes/index');
const app=express();

app.use('/api',mainrouter);
// app.use('/post',postrouter);
// app.use('/auth',authrouter);

app.get("/",(req,res)=>{
    res.send({
        data: 'ok'
    })
})

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log('started listening on port:', PORT);
})