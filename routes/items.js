const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Items Controller")
    console.log("HELLLOOOOO");
})

module.exports = router;