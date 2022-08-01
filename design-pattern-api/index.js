const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer  = require('multer');
const path = require('path');

const app = express();
const authRoutes = require('./src/Routes/Auth');
const blogRoutes = require('./src/Routes/blog');

//lokasi dimana kita menyimpan lokasi file gambar yang diupload
const  fileStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'images');
    },
    filename:(req, file, cb)=>{
        //mengembalikan nama file yang akan diupload
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
})

//filter format image yang diupload
const fileFilter=(req, file, cb)=>{
    if( file.mimetype === "image/png" || 
        file.mimetype === "image/jpg" || 
        file.mimetype === "image/jpeg"){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
//midelware
app.use(bodyParser.json()); //type JSOn
app.use(multer({storage : fileStorage, fileFilter : fileFilter}).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));


//cors allow origin
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,  Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})


app.use('/v1/Auth', authRoutes)
app.use('/v1/blog', blogRoutes)

//membuat pesan error
app.use((err,req, res, next)=>{
    const status = err.errorStatus || 500;
    const message = err.message;
    const data = err.data;
    res.status(status).json({
        message: message,
        data: data
    })
})

mongoose.connect('mongodb+srv://Ranto21:Sayabutawarna1@cluster0.aetsm7d.mongodb.net/designpattern?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000, ()=> console.log("connection succes"))
})
.catch(err => console.log(err))

// app.listen(4000);