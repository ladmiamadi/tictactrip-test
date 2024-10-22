"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { justify } = require("../utils/textUtils");
const jwt = require("jsonwebtoken");
const { users } = require("../models/User");
const duration = 24 * 60 * 60 * 1000;
/**
 * Generate a JWT for an authenticated user
 * @param {User} user
 * @returns {string} The signed JWT token
 */
const createToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: duration
    });
};
/**
 * justify a text for a given request
 * @param {Request} req
 * @param {Response} res
 * @returns {*} justified text or error status
 */
module.exports.justifyText = (req, res) => {
    const text = req.body;
    if (!req.is("text/plain"))
        return res.status(400).json({ error: "ContentType must be text/plain" });
    if (text.trim() === '')
        return res.status(400).json({ error: "There is no text to justify" });
    return res.status(200).send(justify(text));
};
/**
 * Check user and generate token
 * @param {Request} req
 * @param {Response} res
 * @returns {*} status
 */
module.exports.login = (req, res) => {
    try {
        const data = req.body.email;
        const user = { email: data };
        if (users.find((item) => item.email === user.email)) {
            const token = createToken(user);
            res.cookie('jwt', token, { httpOnly: true, maxAge: duration });
            res.cookie('rateLimit', 0, { httpOnly: true, maxAge: duration });
            return res.status(200).json({ token: token });
        }
        else {
            res.cookie('jwt', '', { maxAge: 1 });
            return res.status(401).json({ error: "user not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'Invalid token' });
    }
};
