const bcrypt = require('bcrypt');

function decrypt(password, pass){
    return bcrypt.compareSync(password, pass);
}

module.exports = decrypt;