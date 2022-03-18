const Router = require("express").Router();
const passport=require("../config/passport")
const citiesController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos , ObtenerItinerary, ObtenerComentarios}= citiesController

const usersControllers =require("../controllers/usersControllers")
const {nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion,verificarToken}= usersControllers

const commentControllers= require("../controllers/comentariosControllers")
const {cargaComentarios,obtenerComentarios,borrarComentario, modificarComentario}= commentControllers

const validator= require("../controllers/validator")


Router.route("/datos")
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerary)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)


Router.route("/signIn")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)


Router.route("/comments")
.post(cargaComentarios)

Router.route("/comments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signInToken")
.get(passport.authenticate("jwt", {session:false}), verificarToken)


module.exports= Router

