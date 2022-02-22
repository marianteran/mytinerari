import React,{useEffect, useState} from "react";
import axios from 'axios';

import Button from "@mui/material/Button";
import InformationCity from "../components/InformationCity";
import Itinerary from "../components/Itinerary";
import Slider from "../components/Slider";
import {useStateValue} from "../core/context/StateProvider"
import { useParams } from "react-router-dom";

import fondo from '../imagen/fondos/plano.jpg'

const City = () => {
    const [itineraries, setItineraries]=useState([])
    const [{cities}, dispatch]= useStateValue()
    const{id}= useParams()
    const citySelect= cities.filter(item=>item._id === id)

    console.log(itineraries)

     
    useEffect(() => {
        window.scrollTo(0, 0);

        
        citySelect.map(city=> 
        
          axios.get(`http://localhost:4000/api/itinerary/${city.city}`)
          .then(response =>setItineraries(response.data.response.itinerary))
          )
    
      }, [])

      console.log(itineraries)


   
   

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

                <Itinerary itineraries={itineraries} />

                <div className="mt-5 mb-5" >
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
                    <div style={{ backgroundImage: `url(${fondo})` }}>
                    <Slider />
                    </div>
                    
                </div>
            </main>
        </>
    );

};

export default City;
