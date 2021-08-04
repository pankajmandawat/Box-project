const express = require('express');
const http=require('http')
const router = require('./routes/routing');
const userRouter = require('./routes/userRouter');
const bodyParser = require("body-parser");
const app= express();
const server=http.createServer(app);
const cors =require ('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const expJwt = require('express-jwt');

const checkJwt = expJwt({
    secret: 'someSecret', algorithms: ['HS256']
});

//User router
app.use('/user', userRouter);

app.use('/data',checkJwt, router);

app.listen(3000, ()=>{
    console.log('server is listening to Port 3000');
})
