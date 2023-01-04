const jwt = require("jsonwebtoken");
let control = require("../controller/control")
const mongoose = require('mongoose')
const authorSchema = require("../Models/Author")

let authentication = async function(req,res,next){
    try{
       let token = req.headers['x-api-key']
       //use findOne to make a db call and get the Id to verify the Id and the token Id
       let db = await authorSchema.findOne({ email: req.body.email, password: req.body.password }).select({_id:1}) //returns {_id}
       // use verify on token and get the Id
       let decodedToken =  jwt.verify(token,"this is my first project")
        //check if userId and db Id is same that means user is authenticated 
       if(decodedToken.userId == db._id){
            next()
       }    
    }
    catch(e){
        res.status(500).send({msg:e.message})
    }
}
module.exports.authentication = authentication
 