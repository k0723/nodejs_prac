const express = require('express');
const router = express.Router();

const comments = require("../schemas/comments.js");
const index = require("../schemas/index.js")
const posts = require("../schemas/post.js")

// localhost:3000/api/about GET
router.post("/posts", (req, res) => {
  res.send("goods.js about PATH");
});

router.get("/posts", (req, res) => {
    res.send("goods.js about PATH");
  });

router.get("/posts/:_postId", (req, res) => {
    res.send("goods.js about PATH");
  });


router.put("/posts/:_postId", (req, res) => {
    res.send("goods.js about PATH");
  });

router.delete("/posts/:_postId", (req, res) => {
    res.send("goods.js about PATH");
  });