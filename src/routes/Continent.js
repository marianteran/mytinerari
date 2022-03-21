import React, { useEffect, useState } from "react";
import { useStateValue } from "../core/context/StateProvider"
import { actionTypes } from '../core/context/reducer';
import { Link as LinkRouter } from "react-router-dom";
import axios from 'axios';

import bg2 from '../imagen/continent/PPPPPPP.jpg'

import CardCities from "../components/CardCities";

import imagen from '../imagen/city/rio.jpg'

import globo from '../imagen/continent/globo.png'
import america from '../imagen/continent/america.jpg'
import europa from '../imagen/continent/europa.jpg'
import africa from '../imagen/continent/africa.jpg'
import asia from '../imagen/continent/asia.jpg'
import oceania from '../imagen/continent/oceania.jpg'




const Continent = () => {
	const [{ cities, filterContinent,filterCity }, dispatch] = useStateValue()



	/* console.log(cities[0].continent) */

	/* const [data, setData] = useState([]);
	const [filter, setFilter] = useState(cities);

	const filterProduct =(continent)=>{
		const updateList = data.filter((x)=> x.continent === continent);
		setFilter(updateList)
	} */

	/* console.log("soy filtro cities"+ cities[0].continent)
	console.log("soy filtro continent"+ filterContinent.continent) */

	var newArray = cities.filter(function (x) {
		return (x.continent === "Asia")
	})
	//console.log(newArray)



	/* const [data, setData] = useState(cities);

	var datos = data */

	//console.log(data)

/* 	const filtroContinent = (continent) => {

		if (true) {
			setData = datos.filter(city => city.continent === continent)

		}

		console.log(setData)
	}
 */

	/* const filtroC = (continent) => {
		const filtro= cities.filter(city => city.continent === continent)

		console.log(filtro)
	} */


	/* const filtroContinent2 = () => {
		return cities.filter((city) => (city.continent === "America"))
		
	}
	console.log(filtroContinent2)
 */





	const filtroC = (event) => {
		dispatch({
			type: actionTypes.CONTINENT,
			value: event.target.value

		})
		console.log(event)
	}
	



/* 	const filtroC = name => {
		let filterCo = [];
		if (name === "All") {
		  filterCo = cities;
		} else {
		  filterCo = cities.filter(cities => cities.continent === name
		  );
		} */
	







	return (
		<>

			<div className="banner-cities1">

				<h1 className="cities-title">The Best City</h1>

			</div>


			<div className='continent-image'>
				<img src={bg2} alt="imagen"></img>

			</div>



			<div className='contenedor-btn-continent'>

				<button className='container-btn-continent' onClick={()=>filtroC("All") } >
					<div className='btn-continent'>
						<img src={globo} alt="imagenMundo" ></img>
					</div>
					<h6 className='mt-1'>World</h6>
				</button>


				<button className='container-btn-continent'  onClick={()=>filtroC("America") }>
					<div className='btn-continent'>
						<img src={america} alt="america"></img>
					</div>
					<h6 className='mt-1'>America</h6>
				</button >


				<button className='container-btn-continent' onClick={()=>filtroC("Europe")}>
					<div className='btn-continent'>
						<img src={europa} alt="europa" ></img>
					</div>
					<h6 className='mt-1'>Europe</h6>
				</button>


				<button className='container-btn-continent' onClick={()=>filtroC("Africa")}>
					<div className='btn-continent'>
						<img src={africa} alt="africa"></img>
					</div>
					<h6 className='mt-1'>Africa</h6>
				</button>



				<button className='container-btn-continent' onClick={()=>filtroC("Asia")}>
					<div className='btn-continent'>
						<img src={asia} alt="asia"></img>
					</div>
					<h6 className='mt-1'>Asia</h6>
				</button>


				<button className='container-btn-continent' onClick={()=>filtroC("Oceania")}>
					<div className='btn-continent'>
						<img src={oceania} alt="oceania"></img>
					</div>
					<h6 className='mt-1'>Oceania</h6>
				</button>

			</div>

		

			<div className="container portfolio__container my-5">


				{filterContinent?.map((item) => {


					return (
						
							<div key={item._id} className="flip-container">
								<div className="portfolio__card">
									<div className="front">
										<img className="top" src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt={item.city} />
									</div>
									<div className="back">
										<h4>{item.city}</h4>
										<h6>{item.country}</h6>
										<p>{item.description}</p>
										<button className='btn btn-primary'>
											<LinkRouter to={`/city/${item._id}`}>
												<i className="fas fa-angle-double-right"></i>
											</LinkRouter>
										</button>
									</div>
								</div>
							</div>

					



					)
				})}

			</div>

		</>
	)
}

export default Continent