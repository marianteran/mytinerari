
import React, { useEffect, useState } from "react";


import billete from '../imagen/fondos/billete.png'
import clock from '../imagen/fondos/clock.png'
import idioma from '../imagen/fondos/idioma.png'

import Comments from './Comments';
import LikesC from './LikesC';

import axios from 'axios'


import {useStateValue} from "../core/context/StateProvider"
import { useParams } from "react-router-dom";
import { actionTypes } from '../core/context/reducer';

const Itinerary = (props) => {

    const itineraries = props.itineraries

    //console.log(itineraries)

    const [see, setSee] = useState(false);


    return (
        <>

           
            {itineraries.map((item,index) => {
                return (
                    <div className='fondo-comentario mx-auto' key={item.index} >

                        <h2 className='name-comentario'>{item.name}</h2>
                        <div className='imagenes-comentario'>
                            {item.image.map((element) => {
                                return (


                                    <div className='mb-4'>
                                        <div className='comentario-card'>
                                            <div className="comentario-imag">
                                                <img src={process.env.PUBLIC_URL + `/imagen/itinerarios/${element}`} alt="images"></img>
                                            </div>
                                        </div>
                                    </div>



                                )
                            })}
                        </div>

                        <LikesC likes={item.likes} id={item._id} />

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">

                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className='row mb-4'>
                                            <div className='col-sm-12 col-md-5 col-lg-5'>

                                                <div className="acordion-left">
                                                    <div className="acordion-left-sub">
                                                        <div className='imagen-left'>
                                                            <img src={idioma} alt=""></img>
                                                        </div>

                                                        <span>Available languages: English, Spanish, German, French</span>

                                                    </div>
                                                    <div className="acordion-left-sub">
                                                        <div className='imagen-left'>
                                                            <img src={clock} alt=""></img>
                                                        </div>
                                                        <span>{item.time} hours (aprox.)</span>
                                                    </div>

                                                    <div className="acordion-left-sub ">
                                                        <div className='imagen-left'>
                                                            <img src={billete} alt=""></img>
                                                        </div>
                                                        <span> from US${item.price},00</span>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='col-sm-12 col-md-7 col-lg-7 '>
                                                <p className='texto-comentario'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                    <Comments itinerario={item._id} />


                                    </div>
                                </div>



                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                                       >
                                        <span className="boton-comentario-text">See More </span>
                                    </button>
                                </h2>
                            </div>


                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default Itinerary



  /*   const{id}= useParams()
    const [{cities}, dispatch]= useStateValue()
    const citySelect= cities.filter(item=>item._id === id) */


   //let citySelect = props.citySelect
/* 
    const [itineraries, setItineraries]=useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        
        citySelect.map(city=> 
        
          axios.get(`https://mytinerary-marianela.herokuapp.com/api/itinerary/${city.city}`)
          .then(response =>setItineraries(response.data.response.itinerary))
          )
    
      }, [])

      console.log(itineraries) */
   /*    const [{ cities, user}, dispatch] = useStateValue()
      const [itineraries, setItineraries]=useState([])

      console.log(itineraries)

      useEffect(() => {

        cities.map(city=>   
        axios.get(`https://mytinerary-marianela.herokuapp.com/api/itinerary/${city.city}`)
          .then(response => setItineraries(response.data.response.itinerary) )
          )
  
    
      }, []) */
