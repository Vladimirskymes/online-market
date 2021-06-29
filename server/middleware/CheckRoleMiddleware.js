const jwt = require("jsonwebtoken");

module.exports = function(role){
    return function (request, response, next){
        if(request.method === "OPTIONS") {
            next()
        }
        try {
            const JWtoken = request.headers.authorization.split(' ')[1]
            if(!JWtoken){
                return response.status(401).json({message: "Пользователь не авторизован"})
            }
            const dec = jwt.verify(JWtoken, process.env.KEY_SECRET);
            if(dec.role !== role){
                return response.status(403).json({message: "Пользователь не имеет прав"})

            }
            request.user = dec
            next()
        } catch(error){
            response.status(401).json({message: "Пользователь не авторизован"})
        }
    };
}





