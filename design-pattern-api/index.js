const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const authRoutes = require('./src/Routes/Auth');
const blogRoutes = require('./src/Routes/blog');

app.use(bodyParser.json()); //type JSOn

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

app.listen(4000);