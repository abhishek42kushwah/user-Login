const jwt = require('jsonwebtoken')

exports.generateAccessToken = (userId)=>{
return jwt.sign({userId},
"happy",{expiresIn: '2h'}
)}