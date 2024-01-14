const { success } = require('../utils/responseWrapper');
module.exports = (req, res) => {
    res.send(success(200, 'These are all the posts'));
}