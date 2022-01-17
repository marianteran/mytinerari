import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../imagen/fondos/logo.png"

const Navbar = () => {
    return (
        <>
            <header className="fixed-top">
                <nav className="mt-3  ">
                    <div className="container-fluid d-flex ">
                        <div className="ccol-xs-4 col-sm-4 col-md-4 d-flex">
                            <nav className="navbar-light ">
                                <div className="container">
                                    <LinkRouter className="navbar-brand" to="/">
                                        <img src={logo} alt="logo" />
                                    </LinkRouter>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 d-flex" id="navbarNavAltMarkup">
                            <div className="nav-first-icon text-center">
                            <a href="mailto:info@mytinerary.org" target="blank" className="nav-first"  ><i className="fas fa-envelope-open-text"></i></a>
                                <a href="https://www.instagram.com/?hl=es-la" target="blank" className="nav-first"><i className="fab fa-instagram-square"></i></a>
                                <a href="https://es-la.facebook.com/" target="blank" className="nav-first" ><i className="fab fa-facebook"></i></a>
                                <a href="https://twitter.com/?lang=es" target="blank" className="nav-first"><i className="fab fa-twitter"></i></a>
                                <a href="https://discord.com/login" target="blank" className="nav-first"  ><i className="fab fa-discord"></i></a>


                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="navbar  navbar-expand-lg navbar-light   ">
                    <div className="container-fluid">
                        <div className="col-md-4 d-flex ">
                            <nav className="navbar navbar-light ">
                                <div className="container titulo-page">
                                    <LinkRouter className="navbar-brand1 " to="/">
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


                            <div className="dropdown icon-login">
                                <button type="button" className="btn btn bg-transparent dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fas fa-users"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><LinkRouter className="dropdown-item" to="/login"><i className="fas fa-sign-in-alt"></i>Sign In</LinkRouter></li>
                                    <li><LinkRouter className="dropdown-item" to="/register"><i className="fas fa-user-plus"></i>Sign Up</LinkRouter></li>

                                </ul>
                            </div>

                        </div>


                    </div>

                </nav>

            </header>

        </>
    );
};

export default Navbar;
