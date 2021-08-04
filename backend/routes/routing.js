const express = require('express');
const router=express.Router();
const data = require('../models/db');
const user = require('../models/dbUsers')

router.get('/:username', async (req, res) => {
    var username = req.params.username;
    if(username){
      var userProgress = await user.findProgress(username)
      if(userProgress){
        res.send(userProgress)
      }
      else{
        var data1 = await data.find();
        res.send(data1)
      }
    }
  });

module.exports = router;