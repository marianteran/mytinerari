import React from 'react'

import Slider from "../components/Slider";

import bb from "../imagen/city/bb.jpg";
import rio from "../imagen/city/rio.jpg";
import Background from '../imagen/city/rio2.jpg';




import Button from '@mui/material/Button';
import Comentario from '../components/Comentario';



export default class City extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "Rio de Janeiro",
            country: "Brasil",
            moneda: "Real",
            idioma: "Portugues",
            continente: "Sur America",
            description: " Is a huge coastal city in Brazil, famous for its Copacabana and Ipanema beaches, the 38-meter-high Christ the Redeemer statue on Corcovado hill, and the Sugarloaf Mountain, a granite peak with cable cars that ascend to its top. The city is also known for its extensive favelas. The raucous Carnival festival, with float parades, flamboyant costumes and samba dancers, is considered the largest in the world."
        }
    }




    render() {

        return (
            <>
                <main className="city">

                    <div className="banner-city">

                        <h1 className="city-title">{this.state.city}</h1>

                    </div>

                    <div className="mt-5 mb-5">
                        <div className='container my-5 bandera'>
                            <div className="flip">
                                <img src={bb} alt='' className="flip-1" ></img>
                            </div>
                        </div>

                        <div className="information " style={{ backgroundImage: `url(${Background})` }}>
                            <div className=" container container-information  mx-auto" >
                                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 information-text">
                                    <h3>{this.state.city}</h3>
                                    <h4>{this.state.country}</h4>
                                    <p>{this.state.description}</p>

                                    <div className="information-lin">
                                        <div><i className="fas fa-money-bill-wave"></i> {this.state.moneda}</div>
                                        <div><i className="fas fa-language"></i>{this.state.idioma}</div>
                                        <div><i className="fas fa-map-marker-alt"></i>{this.state.continente}</div>

                                    </div>

                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-5  col-lg-5 text-center ">
                                    <img src={rio} alt="" className="" ></img>
                                </div>


                            </div>
                        </div>
                    </div>



                    <Comentario />


                    <div className="mt-5 mb-5">
                        <div className="container mt-5 mb-0">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="titlepage text-center ">
                                        <h2>
                                            <Button variant="contained"
                                                href='/cities'
                                                size='large'
                                            >
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
        )

    }

}