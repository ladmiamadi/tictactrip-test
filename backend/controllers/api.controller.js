const {justify} = require("../utils/justify");

module.exports.justifyText = (req, res) => {
    if (!req.is('text/plain')) {
        return res.status(400).json({ error: 'ContentType must be text/plain' });
    }

    if(req.body.trim() === '') res.status(400).json({error: "There is no text to justify"});

    const text = req.body;

    res.status(200).send(justify(text, 80));
}