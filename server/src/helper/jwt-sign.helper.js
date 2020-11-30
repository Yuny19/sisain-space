const jwt = require('jsonwebtoken');

function JwtSign(email, role, id){
    return jwt.sign({ email: email, role: role, id: id}, process.env.SECRET_KEY);
}

module.exports = JwtSign;