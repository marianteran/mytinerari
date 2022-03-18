require("dotenv").config()

const express = require("express")  //equivalente al import de react pero en node
const cors=require("cors")
const Router=require("./routes/routes")
const passport = require("passport")
const app = express()
require("./config/database")
require("./config/passport")

/* middlewares */
app.use(cors())
app.use(express.json()) // tramo que pasa datos a una variable
app.use(passport.initialize())
app.use("/api",Router)

app.listen("4000",()=>console.log("Servidor inicializado en puerto 4000"))


