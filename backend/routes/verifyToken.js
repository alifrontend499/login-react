const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // GET AUTH HEADER VAUE
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(':');
        // Get token from array
        const bearerToken = bearer[1];
        try {
            const verified = jwt.verify(bearerToken, process.env.SECRET_KEY);
            req.user = verified;
            res.status(200);
            next();
        } catch (error) {
            res.status(400).send('Invalid Token. Forbidden!');
        }
    } else {
        //FORBIDDEN
        res.sendStatus(403);
    }
}