const jwt = require("jsonwebtoken");
let authentication = async function (req, res, next) {
    try {
        let token = req.headers['x-api-key']
        if (token) {
            let decodedToken = jwt.verify(token, "this is my first project")
            req.Id = decodedToken.userId //for authorization purpose
            next()
        }
        else {
            res.status(400).send({ msg: "x-api-key is require in header" })
        }
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
module.exports.authentication = authentication
