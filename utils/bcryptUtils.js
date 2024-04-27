const bcrypt =  require("bcrypt")

exports.hashPassword = async(password)=>{
return bcrypt.hash(password,10)
}

exports.comparePasswords = async(password,hashPassword)=>{
    return bcrypt.compare(password,hashPassword);
}