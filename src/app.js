"use strict"

const express = require("express")
const app = express()

//라우팅
const home = require("./routes/home")
const PORT = 3000

//앱 세팅
app.set("views","./views")
app.set("view engine","ejs")

//미들웨어
app.use("/", home)

module.exports = app;