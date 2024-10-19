const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.email = verifiedToken.email;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;