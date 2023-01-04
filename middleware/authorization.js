const blogSchema = require("../Models/Blogs")
const authorization= async function(req,res,next){
    try{
        let x= req.params.blogId
        //console.log(x)
        let Id = req.Id
        //console.log(req)
        let db = await blogSchema.findOne({authorId:x})
        //console.log(db)
        if(!db) return res.status(404).send({msg:"data not found"})
        let y = db.authorId.toString()
        //console.log(y)
        if(Id==y) {
            next()

        }
        else{
            res.status(403).send({msg:"unauthorized user"})
        }


    }
    catch(error)
    {return res.status(500).send({msg:"server issue"})}
}


module.exports.authorization=authorization