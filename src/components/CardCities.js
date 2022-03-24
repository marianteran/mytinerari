import React from 'react';
import { Link as LinkRouter } from "react-router-dom";

import {useStateValue} from "../core/context/StateProvider"

const CardCities = () => {
    const [{filterCity}, dispatch]= useStateValue()
    
    
    return (
        <>
            <div className="container contenedor-city">
                <div className="card_city_body center" >
                    {filterCity?.map((item) => { 

                        return (
                            <div className="wrapper" key={item._id}>
                                <div className="container ">

                                    <img className="top" src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt={item.city} />
                                    <div className="bottom">
                                        <div className="left">
                                            <div className="details">
                                                <h2 className="txt_name_city">{item.city}</h2>
                                                <p>{item.country}</p>
                                            </div>
                                            <div className="buy">
                                                <LinkRouter to={`/city/${item._id}`}>
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
                                        <h2>{item.city}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}



                </div>

            </div>






        </>


    );
};

export default CardCities;
