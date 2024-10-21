const jwt = require('jsonwebtoken');
/**
 * Check if a valid token exists in cookies
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 * @returns {*} error status or pass to the next middleware
 */
const checkToken = (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.email = verifiedToken.email;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = checkToken;