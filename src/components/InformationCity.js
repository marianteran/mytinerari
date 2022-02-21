import React from 'react';

import moneda from '../imagen/fondos/moneda.png'
import ubicacion from '../imagen/fondos/ubicacion.png'
import ubicacion2 from '../imagen/fondos/ubicacion2.png'
import idioma2 from '../imagen/fondos/idioma2.png'



const InformationCity = (props) => {
    const cities = props.citySelect
    console.log(cities)

    return (

        <>

            {cities.map((item) => {
                const fondo = process.env.PUBLIC_URL + `/imagen/city/${item.image.second}`
                return (
                    <div className=" text-center" key={item.city}>
                        <div
                            className="information"
                            style={{ backgroundImage: `url(${fondo})` }}>
                            <div className="row">
                                <div className="col-sm-12 col-md-3 col-lg3 pt-2 contenedor-bandera">
                                    <img src={process.env.PUBLIC_URL + `/imagen/bandera/${item.flag}`} alt="" className=""></img>
                                </div>
                                <div className="col-sm-12 col-md-9 col-lg-9 pt-4">
                                    <h1 className="city-title">{item.city}</h1>
                                </div>
                            </div>
                            <div className=" container-information text-center  mx-auto">
                                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 information-text">
                                    <h1 className="display-3 fw-bolder mb-0">{item.city}</h1>
                                    <p>{item.description}</p>
                                    <div className="information-lin">

                                        <div className="information-iconos">
                                            <img src={ubicacion2} alt=""></img>
                                            <span>{item.country}</span>
                                        </div>

                                        <div className="information-iconos">
                                            <img src={ubicacion} alt=""></img>
                                            <span>{item.continent}</span>
                                        </div>

                                        <div className="information-iconos">
                                            <img src={moneda} alt=""></img>
                                            <span>{item.currency}</span>
                                        </div>

                                        <div className="information-iconos">
                                            <img src={idioma2} alt=""></img>
                                            <span>{item.language}s</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-5 city-container-image col-lg-5 text-center ">
                                    <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt="" className="imagen-central"></img>
                                </div>
                            </div>
                        </div>
                        <p className="slogan">{item.slogan}</p>

                    </div>

                   





                )
            })}


            <div className='container mx-auto text-center' >
                <div className='row' >
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3'>
                        <div>


                        </div>
                        
                    </div>

                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-9'>
                        ccccccccccccccccccccccccccccccccccccccccccccc
                    </div>

                </div>
            </div>


        </>

    );
};

export default InformationCity;
