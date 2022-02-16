const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")

const {ObtenerTodosLosDatos , ObtenerItinerary, ObtenerComentarios}= citiesController


Router.route("/datos")
.get(ObtenerTodosLosDatos)


Router.route("/itinerary")
.get(ObtenerItinerary)

Router.route("/comments")
.get(ObtenerComentarios)

module.exports= Router

