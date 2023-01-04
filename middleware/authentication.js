const jwt = require("jsonwebtoken");
let control = require("../controller/control")
const mongoose = require('mongoose')
const authorSchema = require("../Models/Author")

let authentication = async function(req,res,next){
    try{
       let token = req.headers['x-api-key']
       if(token){
        let decodedToken =  jwt.verify(token,"this is my first project")
        req.Id=decodedToken.userId
        console.log(req.Id)
        next()
       }
       else{
        res.status(400).send({msg:"x-api-key is require in header"})
       }
       //use findOne to make a db call and get the Id to verify the Id and the token Id
       //let db = await authorSchema.findOne({ email: req.body.email, password: req.body.password }).select({_id:1}) //returns {_id}
       
       // use verify on token and get the Id
    //    let decodedToken =  jwt.verify(token,"this is my first project")
    //     //check if userId and db Id is same that means user is authenticated 
    //    if(decodedToken.userId == db._id){
    //         next()
    //    }    
    }
    catch(error){
        res.status(500).send({msg:error.message})
    }
}
module.exports.authentication = authentication
 