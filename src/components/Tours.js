import React from 'react'


import roma from "../imagen/tours/roma.jpg"
import tokio from "../imagen/tours/tokio.jpg"
import newyork from "../imagen/tours/newyork.jpg"

const Tours = () => {
    return (
        <>
            <div className='container'>

                <div className="content-tours-card">
                    <div>
                        <div className='tours-card'>
                            <img src={newyork} alt=""></img>
                            <h3>New York</h3>
                            <p>The city that never sleeps, Travel by boat (in season) and bus as you navigate the 9/11 Memorial, South Street Seaport, Rockefeller Center and much more</p>
                        </div>

                    </div>
                    <div>
                        <div className='tours-card'>
                            <img src={tokio} alt=""></img>
                            <h3>Tokyo Tower</h3>
                           
                            <p>Visit the iconic Red Tower in the heart of Tokyo. Climb to the top of the second tallest tower in Japan. Enjoy an elegant lighting concept and amazing views both day and night.</p>
                        </div>

                    </div>
                    <div>
                        <div className='tours-card'>
                            <img src={roma} alt=""></img>
                            <h3>Roma</h3>
                            <p>The Colosseum, the Roman Forum and the Palatine Hill are three of the most touristic places in the city, to which it is worth spending some time to get to know them well.</p>
                        </div>

                    </div>

                </div>
              
            </div>

        </>
    )
}

export default Tours
