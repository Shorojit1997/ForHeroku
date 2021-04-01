require('dotenv').config()
const express = require('express');
const mongoose =require('mongoose')
const app =express();
const path =require('path')
const middleware=require('./Components/middleware/middleware')
const setRoutes=require('./Components/routes/router')

const PORT =process.env.PORT|| 5000;


//  work with database
app.use(middleware);


    app.use(express.static(path.join(__dirname,'client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })


const db = mongoose.connection;
mongoose.connect('mongodb://localhost/newspaper' ,{useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});

db.on('error',(error)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Database Connection Established');
})

setRoutes(app);


app.listen(PORT,(req,res)=>{
    console.log('Server is Connectec on port',PORT);
})