import React, { useEffect } from "react";
import axios from 'axios';
import { Link as LinkRouter } from "react-router-dom";


import it1 from '../imagen/datouser/arraialcaboriojaneiro1.jpg'
import it2 from '../imagen/datouser/arraialcaboriojaneiro2.jpg'
import it3 from '../imagen/datouser/arraialcaboriojaneiro3.jpg'
import it4 from '../imagen/datouser/athensHighlights1.jpg'
import it5 from '../imagen/datouser/athensHighlights2.jpg'
import it6 from '../imagen/datouser/athensHighlights3.jpg'

import { useStateValue } from '../core/context/StateProvider';

import avatar from "../imagen/datouser/avatar1.png"


const DatosUser = () => {
	const [{ user }, dispatch] = useStateValue()



	const usuario = user.datosUser
	//console.log(usuario)

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const cargarImagen = () => {
		if (user.datosUser.imguser === "") {
			return avatar

		} else {
			return user.datosUser.imguser
		}


	}



	return (
		< div className='usuario'>

			<div className='datosUser'>

				<h1 className="user-title">Welcome</h1>

				<div className="banner-datoUser">

					<div className='container content-marco'>
						<div className='marco'>
							<img src={cargarImagen()} alt='user'></img>
							{/* {user? <img className="logo" src={cargarImagen()} alt="user"/> : <img src={avatar} alt='user'></img>  } */}

						</div>
						<div className='marco-info'>
							<h5 style={{ textTransform: "uppercase" }}> {user.datosUser.firstname}</h5>
							<h5>{user.datosUser.email}</h5>
						</div>

					</div>

					<div className='subtitle-principal-user '>
						<h2>Start your Travel</h2>
					</div>

					<div className="heroButtons">
						<LinkRouter to="/cities">
							<button>LET'S  GO</button>
						</LinkRouter>
					</div>
				</div>
			</div>








			<div className='main-datosUser'>


				<div className='content-info-user-card'>

					<div className='content-user-card '>

						<div className='content-user-info-img'>
							<img src="./assets/aventure.jpg" alt="mountain" ></img>
						</div>


						<div className='content-card-user-info'>
							<p>No matter where you want to go, discover your destination.</p>

						</div>

					</div>


					<div className='content-user-card'>

						<div className='content-user-info-img'>
							<img src="./assets/outdoor.jpg" alt="mountain" ></img>
						</div>

						<div className='content-card-user-info'>
							<p>Maximize your vacation experience just in the right way.</p>

						</div>

					</div>


					<div className='content-user-card'>

						<div className='content-user-info-img'>
							<img src="./assets/mountain.jpg" alt="mountain" ></img>
						</div>

						<div className='content-card-user-info'>
							<p>Every Mountain top is within reach if you just keep climbing.</p>

						</div>
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




