const jwt = require('jsonwebtoken');
const { Error } = require('../utils/responseWrapper')
module.exports = async (req, res, next) => {
    console.log('middlewares!! ');
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.status(401).send('Authorization header is required!!');
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    console.log('access token', accessToken);

    try {
        const decoded = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
        req._id = decoded._id;
        next()
    } catch (error) {
        // console.log(error);
        return res.send(Error(401, 'Invalid access token!!'));
    }
    // next();
}