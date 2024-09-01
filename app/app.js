"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()
const morgan = require("morgan")
const app = express()

//라우팅
const home = require("./src/routes/home")
const PORT = 3000

//앱 세팅
app.set("views","./src/views")
app.set("view engine","ejs")
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백과같은 문자가 포함될 경우 제대로 인식되지 않는 문제해결
app.use(bodyParser.urlencoded({ extended: true}))
app.use(morgan("dev"))

//미들웨어
app.use("/", home)

module.exports = app;