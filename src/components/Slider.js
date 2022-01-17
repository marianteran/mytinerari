import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rio from "../imagen/city/rio.jpg";
import paris from "../imagen/city/paris.jpg";
import roma from "../imagen/city/roma.jpg";
import caracas from "../imagen/city/caracas.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <main className='container'>
                <Carousel responsive={responsive} infinite={true}>

                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={rio}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Rio de Janeiro</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={caracas}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Caracas</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={roma}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Roma</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={paris}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Paris</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={rio}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Rio de Janeiro</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={paris}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Paris</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={roma}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Roma</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <div className="card-slider">
                            <div className="imgBx">
                                <img src={paris}
                                    alt="images"></img>
                            </div>
                            <div className="details">
                                <h2>Paris</h2>
                                <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                            </div>
                        </div>

                    </div>
                  
                </Carousel>

            </main>
        </>
    )
}

export default Slider

