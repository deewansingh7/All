const mongoose=require('mongoose');

try {
    const connect=async()=>{
        const uri=process.env.link;
        await mongoose.connect(uri);
        console.log('mongodb connected!!');
    }
    module.exports=connect;
} catch (error) {
    console.log(error.message);
}


