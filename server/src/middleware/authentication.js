const jwt = require('jsonwebtoken');

function authentication(req, res, next){
    try{
        const token = req.headers['token'];

        let decode = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decode;
        next();
    }
    catch(err){
        res.status(401).json({
            message: 'not authorized'
        });
    }
}

module.exports = authentication;