
const express = require("express");

var router = express.Router();


router.get("/", (req, res, next) => {
    res.send("API Is working");

});

module.exports = router;