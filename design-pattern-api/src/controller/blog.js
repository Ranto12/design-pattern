const {validationResult} = require('express-validator')

exports.createBlogPost = (req, res, next)=>{
    console.log(req.body)
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;

    } 

    const result = {
        message : "Create new Blog post Successfully",
        data: {
            post_id :1,
            title : title,
            // image : image,
            body : body,
            created_at : new Date(),
            author : {
                uid : 1,
                name : "ranto"
            }
        }
    }
    res.status(201).json(result);
}