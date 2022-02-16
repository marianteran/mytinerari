import React,{useEffect} from "react";


import Button from "@mui/material/Button";
import InformationCity from "../components/InformationCity";
import Itinerary from "../components/Itinerary";
import Slider from "../components/Slider";
import {useStateValue} from "../core/context/StateProvider"
import { useParams } from "react-router-dom";

const City = () => {
    const [{cities}, dispatch]= useStateValue()
    const{id}= useParams()
    const citySelect= cities.filter(item=>item._id === id)

    console.log(citySelect)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <main className="city">

                <InformationCity citySelect={citySelect} />

                <div className="container mt-5 mb-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="titlepage text-center ">
                                <h2>Main attractions</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Itinerary itineraries={itineraries} /> */}

                <div className="mt-5 mb-5">
                    <div className="container mt-5 mb-0">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="titlepage text-center ">
                                    <h2>
                                        <Button variant="contained" href="/cities" size="large">
                                            More City
                                        </Button>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider />
                </div>
            </main>
        </>
    );

};

export default City;
