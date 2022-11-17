const express = require("express");
const { defaultLogin } = require("../controllers/auth");

const router = express.Router();

router.post("/", defaultLogin);

module.exports = router;