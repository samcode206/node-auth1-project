const router = require("express").Router();
const { json } = require("express");
const Users = require("../data/users-model.js");

router.get("/", async(req,res)=>{
    try{
        const users = await Users.find();
        res.status(200).json(users);
    }catch(err){
       throw res.status(500).json({message: err.message})
    }
});


module.exports = router;