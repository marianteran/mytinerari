const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos , ObtenerItinerary, ObtenerComentarios}= citiesController

const usersControllers =require("../controllers/usersControllers")
const {nuevoUsuario}= usersControllers

const validator= require("../controllers/validator")


Router.route("/datos")
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerary)

Router.route("/signup")
.post(validator,nuevoUsuario)


Router.route("/comments")
.get(ObtenerComentarios)

module.exports= Router

