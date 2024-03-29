const { sign } = require('jsonwebtoken');
const {  JWT_SECRET } = require('../config');

//dot notation
module.exports.generateToken=(user)=>{
    return sign({user}, JWT_SECRET, {expiresIn:"4h"});
};

