const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")

const {ObtenerTodosLosDatos}= citiesController

Router.route("/datos")
.get(ObtenerTodosLosDatos)

module.exports= Router

