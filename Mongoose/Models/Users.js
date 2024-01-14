const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    email: String,
    password: String,
    marks: Number,
});

module.exports=mongoose.model('userplus',UserSchema);