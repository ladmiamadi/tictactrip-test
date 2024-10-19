const express = require("express");
const {justifyText, login} = require("../controllers/api.controller");
const checkToken = require("../middlewares/authentication.midlleware");
const checkRateLimit = require("../middlewares/rateLimit.midlleware");

const router = express.Router();

router.post("/justify", checkToken, checkRateLimit, justifyText);
router.post("/token", login)

module.exports = router;

