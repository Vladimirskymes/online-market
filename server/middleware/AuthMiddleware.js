const jwt = require("jsonwebtoken");

module.exports = function (request, response, next){
    if(request.method === "OPTIONS") {
        next()
    }
    try {
        const JWToken = request.headers.authorization.split(' ')[1]
        if(!JWToken){
            return response.status(401).json({message: "Пользователь не авторизован"})
        }
        const decoded = jwt.verify(JWToken, process.env.KEY_SECRET);
        request.user = decoded
        next()
    } catch(error){
        response.status(401).json({message: "Пользователь не авторизован"})
    }
};