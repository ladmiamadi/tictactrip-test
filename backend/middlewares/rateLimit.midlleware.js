const {countWords} = require("../utils/textUtils");

const checkRateLimit = (req, res, next) => {
    const limit = 80000;
    const numberOfWords = countWords(req.body);
    const currentCount = parseInt(req.cookies.rateLimit) || 0;

    if (currentCount + numberOfWords > limit) {
        return res.status(402).json({ error: 'Payment Required' });
    }

    const newCount = currentCount + numberOfWords;

    res.cookie('rateLimit', newCount, { httpOnly: true ,maxAge: 24 * 60 * 60 * 1000});
    next();
}

module.exports = checkRateLimit;