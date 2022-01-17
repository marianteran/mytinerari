import React from "react";
import { Link as LinkRouter } from "react-router-dom";


import rio from "../imagen/city/rio.jpg";
import tokio from "../imagen/city/tokio.jpg";
import paris from "../imagen/city/paris.jpg";
import roma from "../imagen/city/roma.jpg";
import caracas from "../imagen/city/caracas.jpg";
import Switch from "../components/Switch";



const Cities = () => {
    return (
        <>
            <main className="cities">
                <div className="banner-cities">

                    <h1 className="cities-title">The Best City</h1>

                </div>



                
                <Switch />


                <div className="container contenedor-city">
                    <div className="card_city_body center">
                        <div className="wrapper">
                            <div className="container">
                                <img className="top" src={rio} alt=""></img>
                                <div className="bottom">
                                    <div className="left">
                                    <div className="details">
                                            <h2 className="txt_products">Río de Janeiro</h2>
                                            <p>Brasil</p>
                                        </div>
                                        <div className="buy">
                                            <LinkRouter to="/city">
                                                <i className="fas fa-angle-double-right"></i>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inside">
                                <div className="icon">
                                    <i className="far fa-eye"></i>
                                </div>
                                <div className="contents">
                                    <h1>Río de Janeiro</h1>
                                    <p>Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="wrapper">
                            <div className="container">
                                <img className="top" src={tokio} alt=""></img>
                                <div className="bottom">
                                    <div className="left">
                                        <div className="details">
                                            <h2 className="txt_products">Tokio</h2>
                                            <p>Japón</p>
                                        </div>
                                        <div className="buy">
                                            <LinkRouter to="/city">
                                                <i className="fas fa-angle-double-right"></i>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inside">
                                <div className="icon">
                                    <i className="far fa-eye"></i>
                                </div>
                                <div className="contents">
                                    <h1>Tokio</h1>
                                    <p>Japan's bustling capital mixes the ultra-modern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Shinto Meiji Shrine is known for its towering gate and surrounding forests. The Imperial Palace is located in the middle of large public gardens. The various museums in the city offer exhibits ranging from classical art to a reconstructed kabuki theater</p>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="container">
                                <img className="top" src={roma} alt=""></img>
                                <div className="bottom">
                                    <div className="left">
                                        <div className="details">
                                            <h2 className="txt_products">Roma</h2>
                                            <p>Italia</p>
                                        </div>
                                        <div className="buy">
                                            <LinkRouter to="/city">
                                                <i className="fas fa-angle-double-right"></i>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inside">
                                <div className="icon">
                                    <i className="far fa-eye"></i>
                                </div>
                                <div className="contents">
                                    <h1>Roma</h1>
                                    <p>A sprawling cosmopolitan city with nearly 3,000 years of world-influenced art, architecture, and culture on display. Ancient ruins like those of the Forum and the Colosseum evoke the power of the ancient Roman Empire. Vatican City, the headquarters of the Roman Catholic Church, is home to St. Peter's Basilica and the Vatican Museums, which house masterpieces such as the frescoes in Michelangelo's Sistine Chapel</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="container">
                                <img className="top" src={caracas} alt=""></img>
                                <div className="bottom">
                                    <div className="left">
                                        <div className="details">
                                            <h2 className="txt_products">Caracas</h2>
                                            <p>Venezuela</p>
                                        </div>
                                        <div className="buy">
                                            <LinkRouter to="..">
                                                <i className="fas fa-angle-double-right"></i>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inside">
                                <div className="icon">
                                    <i className="far fa-eye"></i>
                                </div>
                                <div className="contents">
                                    <h1>Caracas</h1>
                                    <p>It is the capital and the most populated city of Venezuela.4 Since the 19th century, it has been considered the center of political and economic power in Venezuela.5 It is located in the north-central coastal area of the country, 12 km from the coast. from the Caribbean Sea and is located within a mountainous valley.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="container">
                                <img className="top" src={paris} alt=""></img>
                                <div className="bottom">
                                    <div className="left">
                                        <div className="details">
                                            <h2 className="txt_products">Paris</h2>
                                            <p>Francia</p>
                                        </div>
                                        <div className="buy">
                                            <LinkRouter to="..">
                                                <i className="fas fa-angle-double-right"></i>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inside">
                                <div className="icon">
                                    <i className="far fa-eye"></i>
                                </div>
                                <div className="contents">
                                    <h1>Paris</h1>
                                    <p>It is a major European city and a world center for art, fashion, gastronomy and culture. Its 19th-century urban landscape is crisscrossed by wide boulevards and the River Seine. Aside from these landmarks, such as the Eiffel Tower and the 12th-century Gothic Notre Dame Cathedral, the city is famous for its coffee culture and designer fashion shops along Rue du Faubourg Saint-Honoré.</p>
                                </div>
                            </div>
                        </div>








                    </div>


                </div>
            </main>
        </>
    );
};

export default Cities;
