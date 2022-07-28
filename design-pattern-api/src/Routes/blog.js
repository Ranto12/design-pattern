const express = require('express');

const router = express.Router();

const blogControler = require('../controller/blog');

// post new blog post : /v1/blog/post
router.post('/post', blogControler.createBlogPost)

module.exports = router;