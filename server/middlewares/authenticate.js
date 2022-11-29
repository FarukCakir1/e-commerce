const httpStatus = require("http-status");
const JWT = require("jsonwebtoken")


const authenticateUser = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if(!token) return res.status(httpStatus.UNAUTHORIZED).send({ message: "Bu işlemi yapabilmek için giriş yapmalısınız.." })

    JWT.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if(err) return res.status(httpStatus.FORBIDDEN).send({ message: "OTURUM SÜRESİ DOLDU" })
        
        req.user = user._doc
        next();
    })
}

const authenticateAdmin = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if(!token) return res.status(httpStatus.UNAUTHORIZED).send({ message: "Bu işlemi yapabilmek için giriş yapmalısınız.." })

    JWT.verify(token, process.env.ACCESS_TOKEN_KEY, (err, admin) => {
        if(err) return res.status(httpStatus.FORBIDDEN).send({ message: "OTURUM SÜRESİ DOLDU" })
        
        req.admin = admin._doc
        next();
    })
}


module.exports = {
    authenticateAdmin,
    authenticateUser
}