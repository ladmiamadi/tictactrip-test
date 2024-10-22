"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { countWords } = require("../utils/textUtils");
/**
 * check if the user has exceeded the number of words allowed per day
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const checkRateLimit = (req, res, next) => {
    const limit = 80000;
    if (!req.is("text/plain"))
        return res.status(400).json({ error: "ContentType must be text/plain" });
    if (req.body.trim() === '')
        return res.status(400).json({ error: "There is no text to justify" });
    const numberOfWords = countWords(req.body);
    const currentCount = parseInt(req.cookies.rateLimit) || 0;
    if (currentCount + numberOfWords > limit)
        return res.status(402).json({ error: 'Payment Required' });
    const newCount = currentCount + numberOfWords;
    res.cookie('rateLimit', newCount, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    next();
};
module.exports = checkRateLimit;
