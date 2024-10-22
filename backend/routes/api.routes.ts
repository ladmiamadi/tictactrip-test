import { Request, Response } from 'express';

const nodeExpress = require("express");
const {justifyText, login} = require("../controllers/api.controller");
const checkToken = require("../middlewares/authentication.midlleware");
const checkRateLimit = require("../middlewares/rateLimit.midlleware");

const router = nodeExpress.Router();

router.post("/justify", checkToken, checkRateLimit, justifyText);
router.post("/token", login)
router.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hey this is my API running 🥳')
});

module.exports = router;

