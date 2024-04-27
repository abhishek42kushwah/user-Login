const express =  require("express") 
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes") 
const userRoutes = require("./routes/userRoutes") 
const connection = require("./config")
const cors = require("cors");
 const app = express()

 port = 4000 
 

app.use(bodyParser.json());
app.use("/auth",authRoutes);
app.use("/user",userRoutes) 
app.use(
   cors({
       origin:"http://localhost:3000",
       credentials:true,
   })
)

app.get("/",(req,res)=>{
   return res.json({
       success:true,
       message:"Your server is up running..."
   })
})

 app.listen(port,()=>{
    console.log(`app start ${port} Number `)
 })

 connection.connect()

