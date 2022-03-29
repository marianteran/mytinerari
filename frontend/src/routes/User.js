import React, { useEffect } from "react";
import axios from 'axios';



import avatar from '../imagen/datouser/avatar1.png'

import marco from '../imagen/datouser/marco.jpg'

import it1 from '../imagen/datouser/arraialcaboriojaneiro1.jpg'
import it2 from '../imagen/datouser/arraialcaboriojaneiro2.jpg'
import it3 from '../imagen/datouser/arraialcaboriojaneiro3.jpg'
import it4 from '../imagen/datouser/athensHighlights1.jpg'
import it5 from '../imagen/datouser/athensHighlights2.jpg'
import it6 from '../imagen/datouser/athensHighlights3.jpg'

import { useStateValue } from '../core/context/StateProvider';
import { actionTypes } from '../core/context/reducer';



const DatosUser = () => {
	const [{ user }, dispatch] = useStateValue()



	const usuario = user.datosUser
	console.log(usuario)

	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

	return (
		< div className='usuario'>

			<div className='datosUser'>

				<h1 className="user-title">Welcome</h1>

				<div className="banner-datoUser">

					<div className='container content-marco'>
						<div className='marco'>
							<img src={user.datosUser.imguser} alt='user'></img>
							{/*  {user ? <img className="logo" src={user.datosUser.imguser} alt="user"/> : <img src={avatar} alt='user'></img>  }   */}
						</div>
						<div className='marco-info'>
							<h5 style={{ textTransform: "uppercase" }}> {user.datosUser.firstname}</h5>
							<h5>{user.datosUser.email}</h5>
						</div>

					</div>

					<div className='subtitle-principal-user '>
						<h2>Start your Travel</h2>
					</div>
				</div>
			</div>



			<div className='main-datosUser'>

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


		</ div>
	)
}

export default DatosUser