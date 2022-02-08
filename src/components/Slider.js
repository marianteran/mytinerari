import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import rio from "../imagen/city/rio.jpg";
// import paris from "../imagen/city/paris.jpg";
// import roma from "../imagen/city/roma.jpg";
// import caracas from "../imagen/city/caracas.jpg";
import { Link } from "react-router-dom";

const Slider=(props) => {
    const cities = props.cities

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

                <Carousel responsive={responsive} infinite={true} >
                    {cities.map((item)=>{
                        return(
                            <div className="box" key={item.city}>
                                <div className="card-slider">
                                    <div className="imgBx">
                                        
                                        <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt={item.city}/>
                                    </div>
                                    <div className="details">
                                        <h2>{item.city}</h2>
                                        <Link to="/cities"><i className="fas fa-plus-circle"></i></Link>
                                    </div>
                                </div>
    
                            </div>

                        )})}
                      
                </Carousel>

            </main>
        </>
    )
}

export default Slider

