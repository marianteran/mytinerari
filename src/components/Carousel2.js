import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative } from "swiper";
import { useStateValue } from "../core/context/StateProvider"


import Button from "@mui/material/Button";



const Carousel2 = () => {
    const [{ cities }, dispatch] = useStateValue()



    return (

        <>

            <div className='carousel-city-bg mx-auto'>


                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">

                            <h2>
                                <Button variant="contained" href="/cities" size="large">
                                    More City 
                                </Button>
                            </h2>

                        </div>    
                    </div>



                </div>



                <div className='carousel-city-container mx-auto' >
                    <Swiper className="swiper-city mx-5"
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        modules={[EffectCreative]}

                    >

                        {cities.map((item) => {

                            return (
                                <SwiperSlide className='swiper-slide-city' key={item._id} >
                                    <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.second}`} alt=""></img>
                                </SwiperSlide>
                            )


                        })}

                    </Swiper>




                    <Swiper className="swiper-city mx-5"
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        modules={[EffectCreative]}

                    >

                        {cities.map((item) => {

                            return (
                                <SwiperSlide className='swiper-slide-city' key={item._id}>
                                    <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt=""></img>
                                </SwiperSlide>
                            )


                        })}

                    </Swiper>





                </div>
            </div>

        </>

    )
}

export default Carousel2