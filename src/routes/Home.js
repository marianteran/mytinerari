import React, { useEffect } from "react";

// image slider statico
import foto3 from "../imagen/foto3.jpg";
import paris from "../imagen/slider/paris.jpg";
import amsterdam from "../imagen/slider/amsterdam.jpg";
import tokio1 from "../imagen/slider/tokio1.jpg";
import zurich2 from "../imagen/slider/zurich2.jpg";


import flag from "../imagen/fondos/flag.gif";




import Slider from "../components/Slider";
import Tours from "../components/Tours";
import Slider2 from "../components/Slider2";

import Typewriter from "typewriter-effect";
import fondo from "../imagen/fondos/file.jpg";
import bannertour from "../imagen/fondos/banner_viajes.png";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main className=" home">
                <div className="banner-home">
                    <h1 className="home-title">MyTinerary</h1>
                    <h1 className="home-letter-move">
                        <Typewriter
                            options={{
                                strings: [
                                    "Enjoy...😀",
                                    "✈travel around the world 🌏",
                                    "don’t dream your life, live your dream",
                                    'traveling is adding life to "life"',
                                    "travels😎..",
                                ],

                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="titlepage text-center ">
                                <h2>“Life is either a daring adventure or nothing at all.”</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section about */}

                <div className="container about">
                    <div className="row mx-auto">
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7  about-parraf">
                            <h1>Enjoy your trip</h1>
                            <p>
                                If your dream has always been to travel the world, you have come
                                to the right place.
                            </p>
                            <p>
                                It does not matter if you are a woman or a man, you are 15 or 90
                                years old, you study or work, you travel alone or with your
                                family, here you will find everything you need to know to make
                                your dream come true, from a family vacation to a trip without a
                                return date.
                            </p>
                            <p>
                                Traveling is not an activity that is limited to the rich, it is
                                something that we can all do if we really want to.
                            </p>
                            <span>Welcome to my MyTinerary </span>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-5  col-lg-5  about-image">
                            <img src={flag} alt="" className="" width={350}></img>
                        </div>
                    </div>
                </div>

                <div
                    className="home-fondo-slider"
                    style={{ backgroundImage: `url(${fondo})` }}
                >
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="titlepage text-center pt-4 ">
                                    <h2>most popular cities</h2>
                                </div>
                            </div>
                        </div>

                        <Slider />
                    </div>
                </div>

                <div className="container-slid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="titlepage text-center ">
                                    <h2>create memories, not migraines</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-indicators">
                            <button type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={zurich2} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Zurich</h5>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={amsterdam} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Amsterdam</h5>

                                    {/* <button className="btn btn-dark">Read Moore</button> */}
                                </div>
                            </div>



                            <div className="carousel-item">
                                <img src={paris} className="d-block w-100 " alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Paris</h5>

                                    {/* <button className="btn btn-dark">Read Moore</button> */}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={tokio1} className="d-block w-100 " alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Tokio</h5>

                                    {/* <button className="btn btn-dark">Read Moore</button> */}
                                </div>
                            </div>


                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>



                <div>
                    <div className="container mt-5">
                    <div className=" bannertour">
                                <img src={bannertour} alt="" className=""></img>
                            </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="titlepage text-center mt-5 ">
                                    <h2>THE BEST TOURS</h2>
                                </div>
                            </div>
                        </div>
                        <Tours />
                    </div>
                </div>

                <Slider2 />
            </main>
        </>
    );
};

export default Home;
