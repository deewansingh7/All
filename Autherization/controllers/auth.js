const User=require('../models/users');
const bcrypt=require('bcrypt');

async function loginController(req,res){
    try {

        const email=req.body.email;
        const password=req.body.password;

        if(!email || !password){
            return res.status(201).send("Enter correct details!!");
        }

        const user=await User.findOne({email});

        const match=await bcrypt.compare(password,user.password);

        if(match){
            return res.status(200).json({user});
        }

        return res.status(201).send("User not found!!");

    } catch (error) {
        console.log(error.message);
        res.status(201).send("Something wrong happened");
    }
}

async function signupcontroller(req,res){

    try {
        const email=await req.body.email;
        const password=await req.body.password;

        const hashPassword=await bcrypt.hashSync(password,10);
        console.log(hashPassword,password);

        if(!email || !password){
            res.status(205).send("Fill correctly!!");
        }

        else{
            const newUser=new User({email,password:hashPassword});
            await newUser.save();
            res.status(200).json(newUser);
        }
    } catch (error) {
        console.log(error.message);
        res.status(201).send("user already exists!!");
    }
    
}

module.exports={loginController,signupcontroller};