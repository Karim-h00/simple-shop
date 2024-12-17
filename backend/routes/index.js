const { Router } = require("express");
const router = Router();
const pool = require("pg");
const db = require("../db/queries");



router.get("/", async (req, res)=>{
    const juice = await db.getJuice();
    res.status(200).json({juice})
})

module.exports = router;