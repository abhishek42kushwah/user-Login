const mySql =  require("mysql")

const connection = mySql.createConnection({
    host: "localhost",
    user:"abhishek",
    password:"12345",
    database: "userLogin",

});

connection.connect((err)=>{
    if(err){
        console.error("error in connection ",err.stack)
        return
    }
    {
        console.log("successFully Connected")
    }

    connection.end((err)=>{
        if(err){
         console.error("error closing database connection ",err.stack);  
         return 
        }
        console.log("Database connection closed");
    })



})

module.exports = connection;