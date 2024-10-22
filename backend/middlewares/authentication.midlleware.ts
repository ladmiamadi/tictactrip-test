import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');

/**
 * Check if a valid token exists in cookies
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {*} error status or pass to the next middleware
 */
const checkToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt

    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
        (req as any).email = verifiedToken.email;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = checkToken;