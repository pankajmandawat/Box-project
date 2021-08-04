const express = require('express');
const userRouter=express.Router();
const user = require('../models/dbUsers')
const jwt = require('jsonwebtoken');

// Route for Login
userRouter.post('/login',async (req, res, next) => {
    let username = req.body.username
    let password = req.body.password
    let user1 = await user.find(username)
    if (user1 == undefined) {
        res.send("User doesnot exist")
    } else if (user1.password != password) {
        res.send("Wrong password")
    }
    else {
        let token = jwt.sign(user, 'someSecret'); // Sigining the token
        res.json(token)
    }
})

// Route for Signup
userRouter.post('/signup',async (req, res, next) => {
    let firstname = req.body.firstname
    let lastname = req.body.lastName
    let username = req.body.username
    let password = req.body.password
    let progressArray = [{ name: "A1", color: "Blue" }, { name: "B1", color: "White" }, { name: "C1", color: "White" },
    { name: "D1", color: "White" }, { name: "E1", color: "White" }]
    let user1 = await user.find(username)
    if (user1.length>0) {
        res.send("User Already Exists")
    } 
	else{
        var user2= await user.create(firstname,lastname,username,password,progressArray)
        if(user2){
            res.send(user2)
        }
    }
})

// Route for updating the Progress
userRouter.put('/data', async (req, res, next)=>{
    let username = req.body.username
    let progress = req.body.progress
    let next_progress = req.body.next_progress
    let user3 = await user.update(username , progress, next_progress )
    if(user3){
        res.send(user3)
    }
})

module.exports = userRouter;