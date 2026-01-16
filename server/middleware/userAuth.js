const jwt=require('jsonwebtoken')
const JWT_USER = process.env.JWT_USER;

const userAuthMiddleware=(req , res,next)=>{
    const token = req.headers.token;
    const verifyToken = jwt.verify(token , JWT_USER);
    if(verifyToken){
        req.userId=verifyToken.id;
        next();
    }
    else{
        res.status(403).json({
            message : "You are not signed in"
        })
    }
}

module.exports={
    userAuthMiddleware
}