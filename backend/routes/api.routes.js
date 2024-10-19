const express = require("express");
const {justifyText, login} = require("../controllers/api.controller");
const verifyToken = require("../middlewares/authentication.midlleware");

const router = express.Router();

router.post("/justify", verifyToken,  justifyText);
router.post("/token", login)

module.exports = router;

