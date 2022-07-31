const {validationResult} = require('express-validator')
const Blogpost = require('../models/blog');

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