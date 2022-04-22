import React, { useEffect, useState } from "react";
import { useStateValue } from "../core/context/StateProvider"
import { actionTypes } from '../core/context/reducer';
import { Link as LinkRouter } from "react-router-dom";


import bg2 from '../imagen/fondos/map.png'
import globo from '../imagen/continent/globo.png'
import america from '../imagen/continent/america.jpg'
import europa from '../imagen/continent/europa.jpg'
import africa from '../imagen/continent/africa.jpg'
import asia from '../imagen/continent/asia.jpg'
import oceania from '../imagen/continent/oceania.jpg'




const Continent = () => {
	const [{ filterContinent }, dispatch] = useStateValue()
	//const [reload, setReload] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	/* 	dispatch({
			type: actionTypes.CONTINENT,
			value: " ",

		}) */
		
		
	}, [])

	const filtroC = (value) => {
		dispatch({
			type: actionTypes.CONTINENT,
			value: value

		})
		//console.log(value)
	}

	//console.log(filterContinent)



	return (
		< div className="continent">

			<div className='continent-image'>
				<img src={bg2} alt="imagen"></img>
			</div>
			<div className='subtitle-principal-continent'>
				<h2>Find a new Adventure!</h2>
			</div>
			<div className="globo-back-cities">
				<LinkRouter to="/cities" className="m">
						<img src={globo} alt="world"  className="btn-continent1"></img>
				</LinkRouter>
			</div>

			<div className='contenedor-btn-continent'>

				<button className='container-btn-continent' onClick={() => filtroC("America")}>
					<div className='btn-continent'>
						<img src={america} alt="america"></img>
					</div>
					<h6 className='mt-1'>America</h6>
				</button >


				<button className='container-btn-continent' onClick={() => filtroC("Europe")}>
					<div className='btn-continent'>
						<img src={europa} alt="europa" ></img>
					</div>
					<h6 className='mt-1'>Europe</h6>
				</button>


				<button className='container-btn-continent' onClick={() => filtroC("Africa")}>
					<div className='btn-continent'>
						<img src={africa} alt="africa"></img>
					</div>
					<h6 className='mt-1'>Africa</h6>
				</button>



				<button className='container-btn-continent' onClick={() => filtroC("Asia")}>
					<div className='btn-continent'>
						<img src={asia} alt="asia"></img>
					</div>
					<h6 className='mt-1'>Asia</h6>
				</button>


				<button className='container-btn-continent' onClick={() => filtroC("Oceania")}>
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

		</ div>
	)
}

export default Continent