import React from 'react';
import idiomas from '../imagen/fondos/idiomas.png'
import mundo from '../imagen/fondos/mundo.png'
import dolar from '../imagen/fondos/dolar.png'


const InformationCity = (props) => {
    const cities = props.citySelect
    //console.log(cities)

    return (

        <>

            {cities.map((item) => {
                const fondo = process.env.PUBLIC_URL + `/imagen/city/${item.image.second}`
                return (

                    <div key={item.city}>
                        <div className=" text-center" >
                            <div
                                className="information"
                                style={{ backgroundImage: `url(${fondo})` }}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-3 col-lg3  contenedor-bandera">
                                        <img src={process.env.PUBLIC_URL + `/imagen/bandera/${item.flag}`} alt="" className=""></img>
                                    </div>
                                </div>
                                <div className=" container-information text-center  mx-auto">
                                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 information-text">
                                        <h1 className="city-title text-center"> Welcome to {item.city}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-5 city-container-image col-lg-5 text-center ">
                                        <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt="" className="imagen-central"></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto mt-5">
                            <div className="information-box-container">
                                <div className="information-box blue">
                                    <h4>Country</h4>
                                    <p>{item.country}</p>
                                    <div className="information-box-image">
                                        <img src={process.env.PUBLIC_URL + `/imagen/icon/${item.icon}`} alt=""></img>
                                    </div>
                                </div>
                                <div className="information-box orange ">
                                    <h4>Continent</h4>
                                    <p>{item.continent}</p>
                                    <div className="information-box-image ">
                                        <img src={mundo} alt=""></img>
                                    </div>
                                </div>
                                <div className="information-box yellow">
                                    <h4>Language</h4>
                                    <p>{item.language}</p>
                                    <div className="information-box-image ">
                                        <img src={idiomas} alt=""></img>
                                    </div>
                                </div>
                                <div className="information-box red">
                                    <h4>Currency</h4>
                                    <p>{item.currency}</p>
                                    <div className="information-box-image">
                                        <img src={dolar} alt=""></img>
                                    </div>
                                </div>
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
