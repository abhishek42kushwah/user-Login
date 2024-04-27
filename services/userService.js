const connection = require("../config")

exports.createUser = async (firstName,lastName,email,password)=>{
   try {
    const query = "INSERT INTO user (firstName,lastName,email,password)VALUES(?,?,?,?)";
    const result = connection.query(query,[firstName,lastName,email,password])
    return result;
   } catch (error) {
     return error
   }
}

exports.getUserByEmail = async(email)=>{
    try {
        const query = 'SELECT * FROM users WHERE email = ? ';
        const result = await connection.query(query,[email]);
        return result[0];  
    } catch (error) {
        return error
    }
}

exports.getUserById = async (userId)=>{
    try {
      const query ="SELECT * FROM users WHERE id = ?"  
      const result = await connection.query(query,[userId]);
      return result[0];
    } catch (error) {
        return error
    }
}