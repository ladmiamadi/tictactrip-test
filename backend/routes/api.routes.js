const express = require("express");
const {justifyText} = require("../controllers/api.controller");

const router = express.Router();

router.post("/justify", justifyText);

module.exports = router;

