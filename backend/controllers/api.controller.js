const {justify} = require("../utils/textUtils");

const jwt = require("jsonwebtoken");
const {users} = require("../models/User");
const duration = 24 * 60 * 60 * 1000;

const createToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: duration
    });
};

module.exports.justifyText = (req, res) => {
    if (!req.is("text/plain")) {
        return res.status(400).json({ error: "ContentType must be text/plain"});
    }

    if(req.body.trim() === '') res.status(400).json({error: "There is no text to justify"});

    const text = req.body;
    res.status(200).send(justify(text));
}

module.exports.login = (req, res) => {
    try {
        const data = req.body.email;
        const user = {email: data};

        if(users.find(item => item.email === user.email)) {
            const token = createToken(user);

            res.cookie('jwt', token, {httpOnly: true, maxAge: duration});
            res.cookie('rateLimit', 0, { httpOnly: true, maxAge: duration });

            return res.status(200).json({token: token});
        } else {
            res.cookie('jwt', '', {maxAge: 1});
            return res.status(401).json({error: "user not found"});
        }
    } catch (error) {
        res.status(500).json({ error: 'Invalid token' });
    }
}