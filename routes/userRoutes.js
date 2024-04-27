const express = require("express")
const router =  express.Router()
const {getUserDetails} = require("../controller/userController")

router.get("/user",getUserDetails)

module.exports = router;