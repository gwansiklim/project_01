const { Router } = require("express");
const express = require("express");
const Memos = require("../schemas/post")

const router = express.Router();

//메인.
router.get("/memos", async (req, res) => {
    const memos = await Memos.find().sort("-time");
    res.json(memos);
})

//db저장
router.post('/memos', async (req, res) => {
    const { name, title, write, password, date } = req.body;
    await Memos.create({ name: name, title: title, write: write, password: password, time: date })

    res.send({ result: "success" });
})

module.exports = router;

