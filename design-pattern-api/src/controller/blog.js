const {validationResult} = require('express-validator');
const Blogpost = require('../models/blog');

//create blog post : /v1/blog/post
exports.createBlogPost = (req, res, next)=>{
    console.log(req.body);
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
        
    } 

    if(!req.file){
        const err = new Error('No image');
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;
    console.log(image)
    
    const posting = new Blogpost({
        title: title,
        body : body,
        image : image,
        author : {
            uid: 1,
            name : "ranto"
        }
    })
    //ini akan menyimpan di dalam data base
    posting.save()
    .then(result => {
    res.status(201).json({
        message: 'Posting created',
        data : result
    });  
    })
    .catch(err => console.log(err))

                     
}

// get all post : /v1/blog/posts
exports.getAllBlogPost = (req, res, next)=>{
    //memanggil seulurh data dari data base yang ada
    Blogpost.find()
    .then(result => {
        res.status(200).json({
            message: 'All blog post',
            data : result
        })
    })
    .catch(err => {
        //akan di eksekusi di dalam index.js parent untuk handle midelware error
        next(err);
    })
}

//get post by pagenation
exports.getAllBlogPostpagenation = (req, res, next)=>{
    //batas data yang akan ditampilkan
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    let totalItems;

    Blogpost.find()
    .countDocuments()
    .then(count =>{
        totalItems = count;
        return Blogpost.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
    })
    .then(result =>{
        res.status(200).json({
            message : 'get bye pegenation',
            data : result,
            totalData: totalItems,
            perPage: perPage,
            currentPage: currentPage,
        })
    })
    .catch(err =>{
        next(err);
    })

}

// get post by id : /v1/blog/posts/:id
exports.getBlogPostById = (req, res, next)=>{
    //untuk mengambil param yang ada di url
    const id = req.params.postID;
    Blogpost.findById(id)
    .then(result => {
        if(!result){
            const err = new Error('Posting not found');
            err.errorStatus = 404;
            throw err;
        } else {
            res.status(200).json({
                message: "blog post bye id",
                data : result
            })
        }
    })
    .catch(err =>{
        next(err)
    })
}

// update post by id : /v1/blog/posts/:id
exports.updateBlogPostById = (req, res, next)=>{
    const error = validationResult(req);
    if(!error.isEmpty){
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = error.array();
    }

    if(!req.file){
        const err = new Error('No image');
        err.errorStatus = 422;
        throw err;
    }

    const id = req.params.postID;
    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    Blogpost.findById(id)
    //multiple promise yang mana pengecekan data 2 kali
    //1. pertama 
    .then(result =>{
        if(!result){
            const err = new Error('postingan not found');
            err.errorStatus = 404;
            throw err;
        } 
        result.title = title;
        result.image = image;
        result.body = body;

        return result.save();
    })
    .then(result =>{
        res.status(200).json({
            message : 'postingan updated',
            data : result
        })
    })
    .catch(err =>{
        next(err)
    })
}

//detele post by id : /v1/blog/posts/:id
exports.deleteBlogPostById = (req, res, next)=>{
    const id = req.params.postID;
    Blogpost.findById(id)
    .then(result =>{
        if(!result){
            const err = new Error('postingan not found');
            err.errorStatus = 404;
            throw err;
        } 
        return result.remove();
    }).then(result =>{
        res.status(200).json({
            message : 'postingan deleted',
            data : result
        })
    }).catch(err =>{
        next(err)
    })
}