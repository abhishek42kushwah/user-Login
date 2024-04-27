const express = require("express")
const router = express.Router()
const {signUp,logIn} = require("../controller/userLogin") 

router.post("/signUp",signUp);
router.post("/logIn",logIn);

module.exports = router;