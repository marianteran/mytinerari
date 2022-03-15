import React from 'react'

import avatar from '../imagen/avatar/avatar1.jpg'

import marco from '../imagen/datouser/marco.jpg'

import it1 from '../imagen/datouser/arraialcaboriojaneiro1.jpg'
import it2 from '../imagen/datouser/arraialcaboriojaneiro2.jpg'
import it3 from '../imagen/datouser/arraialcaboriojaneiro3.jpg'
import it4 from '../imagen/datouser/athensHighlights1.jpg'
import it5 from '../imagen/datouser/athensHighlights2.jpg'
import it6 from '../imagen/datouser/athensHighlights3.jpg'





const DatosUser = () => {
  return (
    <>




      <div className='datosUser'>
        <div className="banner-datoUser">
          <h1 className="datoUser-title">welcome</h1>
          <h2 className="datoUser-subtitle">Find your best destination</h2>
        </div>
      </div>


  

      <div className='main-datosUser'>

      <div className='container content-marco'>
        <div className='marco'>

          <img src={avatar} alt='user' ></img>

        </div>
        <div className='marco-info'>
          <h4>Nombre User</h4>
          <h6>mytinerary@mytinerary.com</h6>
        </div>


      </div>







       
      <h4 className='myItinerari'>My itineraries</h4>
        <div className='container-user-itinerari'>
        

          <div className='content-user-itinerari'>



            <div className='content-user-itinerari-image'>

              <div className='content-img'>
                <img src={it1} alt='user'></img>
              </div>

              <div className='content-img'>
                <img src={it2} alt='user'></img>
              </div>
              <div className='content-img'>
                <img src={it3} alt='user'></img>
              </div>

            </div>



            <div className='content-user-itinerari-comment'>
              <h5>Day trip to Arraial do Cabo from Rio</h5>
              <h5>Rio de Janeiro</h5>
              <p>beautiful place to meet and travel around the world</p>

            </div>


          </div>


          <div className='content-user-itinerari'>



            <div className='content-user-itinerari-image'>

              <div className='content-img'>
                <img src={it4} alt='user'></img>
              </div>

              <div className='content-img'>
                <img src={it5} alt='user'></img>
              </div>
              <div className='content-img'>
                <img src={it6} alt='user'></img>
              </div>

            </div>



            <div className='content-user-itinerari-comment'>
              <h5>Athens Highlights: A Mythological Tour</h5>
              <h5>Athens</h5>
              <p> beautiful place, travel around the world in this city beautiful place, travel around the world in this city</p>

            </div>


          </div>


          <div className='content-user-itinerari'>



            <div className='content-user-itinerari-image'>

              <div className='content-img'>
                <img src={it1} alt='user'></img>
              </div>

              <div className='content-img'>
                <img src={it2} alt='user'></img>
              </div>
              <div className='content-img'>
                <img src={it3} alt='user'></img>
              </div>

            </div>



            <div className='content-user-itinerari-comment'>
              <h5>Day trip to Arraial do Cabo from Rio</h5>
              <h5>Rio de Janeiro</h5>
              <p> beautiful place, travel around the world in this city beautiful place, travel around the world in this city</p>

            </div>


          </div>
        

        </div>






      </div>


    </>
  )
}

export default DatosUser