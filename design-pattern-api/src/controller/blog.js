exports.createBlogPost = (req, res, next)=>{
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

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