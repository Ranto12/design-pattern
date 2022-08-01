const express = require('express');
const {body} = require('express-validator')

const router = express.Router();

const blogControler = require('../controller/blog');

// post new blog post : /v1/blog/post
//bisa melanjutkan untuk validasi di bagian documentasi expres validator
router.post('/post',[
        body('title').isLength({min: 5})
        .withMessage('input title tidak sesuai'), 
        body('body').isLength({min: 5})
        .withMessage('input body tidak sesuai')], 
    blogControler.createBlogPost)

//get all post : /v1/blog/posts
// router.get('/posts', blogControler.getAllBlogPost);
//get bye page perpage
router.get('/posts', blogControler.getAllBlogPostpagenation);

//get post by id : /v1/blog/posts/:id
router.get('/post/:postID', blogControler.getBlogPostById);

//update post by id : /v1/blog/posts/:id
router.put('/post/:postID',[
    body('title').isLength({min: 5})
    .withMessage('input title tidak sesuai'), 
    body('body').isLength({min: 5})
    .withMessage('input body tidak sesuai')
], blogControler.updateBlogPostById);

//delete post by id : /v1/blog/posts/:id
router.delete('/post/:postID', blogControler.deleteBlogPostById);
module.exports = router;