const jwt = require('jsonwebtoken');


const requireUser = async (req, res, next) => {
    try {
        if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
            return res.status(401).send('Authorization header is required!!');
        }

        const accessToken = req.headers.authorization.split(' ')[1];

        const check = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);

        if (check) {
            next();
        }

        return res.send('Access Token Expired!!');
    } catch (error) {
        return res.send('Access Token Expired!!');
        // console.log(error);
    }

}

module.exports = requireUser;