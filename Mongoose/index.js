const mongoose=require('mongoose');
const User=require('./Models/Users');
const mongoURL="mongodb+srv://deewansingh827:gLFwlbgk1wobWSSN@cluster0.kuhrnn8.mongodb.net/?retryWrites=true&w=majority";

try{
    mongoose.connect(mongoURL); 
    console.log('MonogoDb connected');
}
catch(e){
    console.log(e);
}

async function CreateUser(newuser){
    const user=new User(newuser);
    console.log("dadsas2");
    const data=await user.save(); 
    console.log("dadsas1");
    //console.log(data);
}

// console.log("dadsas3");

// CreateUser({
//     email: 'deewan@gmail.com',
//     password:'1234',
//     marks:50
// })

async function finduser(userId){
    //console.log("fad");
    const data=await User.findById(userId);
    console.log(data);
    return data;
}
// finduser();

async function updateuser(userId,marks){
    const user=await finduser(userId);
    user.marks=marks;
    const updateduser=await user.save();
    console.log(updateduser);
}

updateuser("6506adc3ee76714308ffd1a1",59);