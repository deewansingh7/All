const express=require('express');
const dotenv=require('dotenv');
const mainRouter=require('./routes/');
const dbConnect=require('./dbController');
dotenv.config({path:'./secret.env'});
// dotenv.config();
const app=express();

app.use(express.json());
app.use('/api',mainRouter);

const PORT=process.env.PORT;

console.log(PORT);

dbConnect();

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
});