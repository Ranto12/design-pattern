const express = require('express');
const {body} = require('express-validator')

const router = express.Router();

const blogControler = require('../controller/blog');

// post new blog post : /v1/blog/post
//bisa melanjutkan untuk validasi di bagian documentasi expres validator
router.post('/post',[
        body('title').isLength({min: 5}).withMessage('input title tidak sesuai'), 
        body('body').isLength({min: 5}).withMessage('input body tidak sesuai')], 
    blogControler.createBlogPost)

module.exports = router;