import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../imagen/fondos/logo.png"
import axios from 'axios';
import gmail from '../imagen/fondos/g.png'
import face from '../imagen/fondos/f.png'
import discord from '../imagen/fondos/d.png'
import twiter from '../imagen/fondos/t.png'
import insta from '../imagen/fondos/i.png'
import avatar from '../imagen/avatar/avatar.png'


import { useStateValue } from '../core/context/StateProvider';
import { actionTypes } from "../core/context/reducer";
import swal from "sweetalert";


const Navbar = () => {
    const [{ user }, dispatch] = useStateValue()

   
    async function cerrarSesion() {
        const email = user.datosUser.email

        await axios.post("https://mytinerary-marianela.herokuapp.com/api/signout", {email})
            .then(response => {
                
                if(response.data.success){
                    localStorage.removeItem("token")
                    dispatch({
                        type: actionTypes.USER,
                        user: null
                    })
                }

                swal({
                    
                    text:response.data.response,
                    buttons:"ok"
                })
                //alert(response.data.response)
               
            })

            

    } //console.log(user)

    return (
        <>
            <header className="fixed-top">
                <nav className="container-fluid d-flex ">
                   
                        <div className="col-xs-4 col-sm-4 col-md-4 d-flex">
                            <nav className="navbar-light ">
                                <div className="container">
                                    <LinkRouter className="navbar-brand " to="/">
                                        <img src={logo} alt="logo" className="pt-2" />
                                    </LinkRouter>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 d-flex pruebados" id="navbarNavAltMarkup" >
                            <div className="nav-first-icon ">
                                <a href="mailto:info@mytinerary.org" target="blank" className="nav-first"  ><img src={gmail} alt=""></img></a>
                                <a href="https://www.instagram.com/?hl=es-la" target="blank" className="nav-first"><img src={insta} alt=""></img></a>
                                <a href="https://es-la.facebook.com/" target="blank" className="nav-first" ><img src={face} alt=""></img></a>
                                <a href="https://twitter.com/?lang=es" target="blank" className="nav-first"><img src={twiter} alt=""></img></a>
                                <a href="https://discord.com/login" target="blank" className="nav-first"  ><img src={discord} alt=""></img></a>



                            </div>
                        </div>
                    
                </nav>
                <nav className="navbar  navbar-expand-lg navbar-light   ">
                    <div className="container-fluid">
                        <div className="col-md-4 d-flex ">
                            <nav className="navbar navbar-light ">
                                <div className="container titulo-page">
                                    <LinkRouter className="navbar-brand1" to="/">
                                        <span>MYTINERARY</span>
                                    </LinkRouter>
                                </div>
                            </nav>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>



                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item ">
                                    <LinkRouter className="nav-link" to="/">Home</LinkRouter>
                                </li>
                                <li className="nav-item">
                                    <LinkRouter className="nav-link" to="/cities">Cities</LinkRouter>
                                </li>
                            </ul>


                            {!user ?
                            <div className="dropdown icon-login">
                                <button type="button" className="btn btn bg-transparent dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fas fa-users"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><LinkRouter className="dropdown-item" to="/signin"><i className="fas fa-sign-in-alt"></i>Sign In</LinkRouter></li>
                                    <li><LinkRouter className="dropdown-item" to="/signup"><i className="fas fa-user-plus"></i>Sign Up</LinkRouter></li>
                                </ul>
                            </div>

                            :
                            <div className="dropdown icon-login">
                                <button type="button" className="btn btn bg-transparent dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img className="usernav" src={user.datosUser.imguser}></img>
                                </button>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    <h6 className="user-nabvar-name">Welcome {user.datosUser.firstname}</h6>
                                    <li><LinkRouter className="dropdown-item " to="/signin">Me<i className="fas fa-sign-in-alt"></i></LinkRouter></li>
                                    <li><LinkRouter className="dropdown-item " onClick={() => cerrarSesion()} to="/">Sign Out<i className="fas fa-sign-in-alt"></i></LinkRouter></li>

                                </ul>

                            </div>
                            }


                        </div>





                    </div>

                </nav>

            </header >

        </>
    );
};

export default Navbar;
