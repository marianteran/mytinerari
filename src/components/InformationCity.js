import React from 'react';

/* import moneda from '../imagen/fondos/moneda.png'
import ubicacion from '../imagen/fondos/ubicacion.png'
import ubicacion2 from '../imagen/fondos/ubicacion2.png'
import idioma2 from '../imagen/fondos/idioma2.png' */

import idiomas from '../imagen/fondos/idiomas.png'
import mundo from '../imagen/fondos/mundo.png'
import dolar from '../imagen/fondos/dolar.png'


const InformationCity = (props) => {
    const cities = props.citySelect
    console.log(cities)

    return (

        <>

            {cities.map((item) => {
                const fondo = process.env.PUBLIC_URL + `/imagen/city/${item.image.second}`
                return (

                    <div>
                        <div className=" text-center" key={item.city}>
                            <div
                                className="information"
                                style={{ backgroundImage: `url(${fondo})` }}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-3 col-lg3 pt-2 contenedor-bandera">
                                        <img src={process.env.PUBLIC_URL + `/imagen/bandera/${item.flag}`} alt="" className=""></img>
                                    </div>
                                   
                                </div>
                                <div className=" container-information text-center  mx-auto">
                                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 information-text">
                                    <h1 className="city-title text-center">{item.city}</h1>
                                        <p>{item.description}</p>
                                        
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-5 city-container-image col-lg-5 text-center ">
                                        <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt="" className="imagen-central"></img>
                                    </div>
                                </div>
                            </div>




                            

                        </div>


                        <div className="container row1-container">
                            <div className="box box-down cyan">
                                <h2>Continent</h2>
                                <p>{item.continent}</p>
                                <img src={mundo} alt=""></img>
                            </div>

                            <div className="box red">
                                <h2>Country</h2>
                                <p>{item.country}</p>
                              
                                    <img src={process.env.PUBLIC_URL + `/imagen/icon/${item.icon}`} alt="" className=""></img>
                                   
                                
                                
                            </div>

                            <div className="box box-down blue">
                                <h2>Language</h2>
                                <p>{item.language}</p>
                                <img src={idiomas} alt=""></img>
                            </div>
                        </div>
                        <div className="row2-container">
                            <div className="box orange">
                                <h2>Currency</h2>
                                <p>{item.currency}</p>
                                <img src={dolar} alt=""></img>
                            </div>
                        </div>
                        <p className="slogan">{item.slogan}</p>
                    
                    </div>

                )
            })}


        </>

    );
};

export default InformationCity;
