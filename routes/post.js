// const express = require('express')
import express from 'express'
const router = express.Router()
import { getPost , getPosts , createPost , updatePost , deletePost } from '../controller/postController.js'

router.get("/", getPosts);

// single post
router.get("/:id", getPost);

// create new post - the route is api/posts
router.post("/", createPost);

//update posts
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

// module.exports = router
export default router;