const mongoose = require('mongoose');
const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send('Email or Password required!!');
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.send('User already exists!!')
        }
        const hashPassword = await bcrypt.hash(password, 10);

        // await User.save({email,password:hashPassword});
        const newUser = new User({ email, password: hashPassword });
        await newUser.save();

        return res.status(200).send(newUser);
    } catch (error) {
        console.log(error);
    }
    // return res.send('signup  successful !!');

}


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send('Email and Password required!!');
        }
        const user = await User.findOne({ email });
        if (!user) return res.send('Register First!!');

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) {
            return res.send("Incorrect Password !!");
        }

        // return res.send('Login Successfull');

        const accessToken = accessTokenGenerator({ _id: user._id });
        const refreshToken = refreshTokenGenerator({ _id: user._id });

        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true });

        return res.send(accessToken);

    } catch (error) {
        console.log(error);
    }
}

const accessTokenRefresher = async (req, res) => {
    try {
        const cookies = req.cookies;
        console.log(cookies);
        if (!cookies.jwt) return res.send('refresh token in cookies required!!!');
        const refreshToken = cookies.jwt;
        console.log(refreshToken);
        // const {refreshToken}=req.body
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
        console.log(decoded);
        const _id = decoded._id;

        const accessToken = accessTokenGenerator({ _id });
        return res.send(accessToken);

    } catch (error) {
        console.log(error);
        return res.send('Refresh Token Expired!!!');
    }
}

const accessTokenGenerator = (data) => {
    const token = jwt.sign(data, process.env.ACCESS_TOKEN_KEY, { expiresIn: '60s' });
    return token;
}

const refreshTokenGenerator = (data) => {
    const token = jwt.sign(data, process.env.REFRESH_TOKEN_KEY, { expiresIn: '1y' });
    return token;
}
module.exports = { loginController, signupController, accessTokenRefresher };