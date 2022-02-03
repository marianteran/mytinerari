import React from 'react'
import { useState } from "react";

// fotos
import copaCabana from "../imagen/tours/copaCabana.jpg";
import copaCabana2 from "../imagen/tours/copaCabana2.jpg";
import copaCabana3 from "../imagen/tours/copaCabana3.jpg";
import maracana1 from "../imagen/tours/maracana1.jpg";
import maracana2 from "../imagen/tours/maracana2.jpg";
import maracana3 from "../imagen/tours/maracana3.jpg";
import tijuca1 from "../imagen/tours/tijuca1.jpg";
import tijuca2 from "../imagen/tours/tijuca2.jpg";
import tijuca3 from "../imagen/tours/tijuca3.jpg";
import avatar1 from '../imagen/avatar/avatar1.jpg'

import billete from '../imagen/fondos/billete.png'
import clock from '../imagen/fondos/clock.png'
import idioma from '../imagen/fondos/idioma.png'







const Comentario = () => {

    const [like, setLike] = useState(0);
    const [see, setSee] = useState(false);


    return (
        <>

            <div className="container mt-5 mb-0">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="titlepage text-center ">
                            <h2>Main attractions</h2>
                        </div>
                    </div>
                </div>
            </div>




            <div className='fondo-comentario mx-auto'>
                <h2 className='name-comentario'>Praia de Copacabana</h2>
                <div className='imagenes-comentario'>

                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={copaCabana} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={copaCabana2} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={copaCabana3} alt="images"></img>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='content-usuario my-4 mx-auto'>

                    <div className='avatar'>
                        <img src={avatar1} alt=""></img>
                        <p className='user'>User</p>
                    </div>

                    <div className='like '>
                        <button className="btn btn-like" onClick={() => setLike(like + 1)}><i className="far fa-heart"></i></button>
                        <span>{like}</span>

                    </div>

                </div>

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
                                                <span> 7 hours (aprox.)</span>
                                            </div>

                                            <div className="acordion-left-sub ">
                                                <div className='imagen-left'>
                                                    <img src={billete} alt=""></img>
                                                </div>
                                                <span> from US$ 50,00</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='col-sm-12 col-md-7 col-lg-7 '>
                                        <p className='texto-comentario'>
                                            Lively beach with a promenade and bars.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam explicabo sequi debitis fuga facilis adipisci molestias nemo ut omnis! Rem accusamus exercitationem ea animi, dolor minima omnis mollitia deserunt!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti harum blanditiis ipsum quam praesen
                                        </p>
                                    </div>
                                </div>

                                <div className="comentarios-user">
                                    <div className='acordion-box'>
                                        <div className='comentario-user-imag'>
                                            <img src={avatar1} alt=""></img>
                                        </div>
                                        <div className='comentario-user-tex'>
                                            <p>I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ad, odit
                                                provident earum voluptatibus magnam aut velit placeat ex reiciendis doloremque,
                                                excepturi itaque, laboriosam dolorum consequatur ducimus sed est! </p>
                                        </div>
                                    </div>
                                    <div className='acordion-box'>
                                        <div className='comentario-user-imag'>
                                            <img src={avatar1} alt=""></img>
                                        </div>
                                        <div className='comentario-user-tex'>
                                            <p>I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ad, odit
                                                provident earum voluptatibus magnam aut velit placeat ex reiciendis doloremque,
                                                excepturi itaque, laboriosam dolorum consequatur ducimus sed est! </p>
                                        </div>
                                    </div>

                                    <div className="mb-3">

                                        <form>
                                            <textarea name="textarea" placeholder="Write us ....."
                                                className='city-texarea'></textarea>
                                        </form>

                                        <div className="btn-comentario-form">
                                            <button className="btn btn-primary">Send <i className="fas fa-paper-plane"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                                onClick={() => setSee(!see)}>
                                <span className="boton-comentario-text">{!see ? 'See more' : 'Hide'} </span>
                            </button>
                        </h2>
                    </div>


                </div>
            </div>

            <div className='fondo-comentario mx-auto'>
                <h2 className='name-comentario'>Day trip to Arraial do Cabo from Rio</h2>
                <div className='imagenes-comentario'>

                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={maracana1} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={maracana2} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={maracana3} alt="images"></img>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='content-usuario my-4 mx-auto'>

                    <div className='avatar'>
                        <img src=".." alt=""></img>
                        <p className='user'>User</p>
                    </div>

                    <div className='like '>
                        <button className="btn btn-like" onClick={() => setLike(like + 1)}><i className="far fa-heart"></i></button>
                        <span>{like}</span>

                    </div>

                </div>

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
                                                <span> 7 hours (aprox.)</span>
                                            </div>

                                            <div className="acordion-left-sub ">
                                                <div className='imagen-left'>
                                                    <img src={billete} alt=""></img>
                                                </div>
                                                <span> from US$ 50,00</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='col-sm-12 col-md-7 col-lg-7 '>
                                        <p className='texto-comentario'>
                                            Lively beach with a promenade and bars.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam explicabo sequi debitis fuga facilis adipisci molestias nemo ut omnis! Rem accusamus exercitationem ea animi, dolor minima omnis mollitia deserunt!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti harum blanditiis ipsum quam praesen
                                        </p>
                                    </div>
                                </div>

                                <div className="comentarios-user">

                                    <div className='no-comments'>

                                        <p className='no-comments-tex'>There are no comments on this itinerary, be the first!</p>

                                    </div>
                                   
                                

                                    <div className="mb-3">

                                        <form>
                                            <textarea name="textarea" placeholder="Write us ....."
                                                className='city-texarea'></textarea>
                                        </form>

                                        <div className="btn-comentario-form">
                                            <button className="btn btn-primary">Send <i className="fas fa-paper-plane"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                                onClick={() => setSee(!see)}>
                                <span className="boton-comentario-text">{!see ? 'See more' : 'Hide'} </span>
                            </button>
                        </h2>
                    </div>


                </div>
            </div>
            <div className='fondo-comentario mx-auto'>
                <h2 className='name-comentario'>Tijuca National Park</h2>
                <div className='imagenes-comentario'>

                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={tijuca1} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={tijuca2} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='comentario-card'>
                            <div className="comentario-imag">
                                <img src={tijuca3} alt="images"></img>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='content-usuario my-4 mx-auto'>

                    <div className='avatar'>
                        <img src={avatar1} alt=""></img>
                        <p className='user'>User</p>
                    </div>

                    <div className='like '>
                        <button className="btn btn-like" onClick={() => setLike(like + 1)}><i className="far fa-heart"></i></button>
                        <span>{like}</span>

                    </div>

                </div>

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
                                                <span> 7 hours (aprox.)</span>
                                            </div>

                                            <div className="acordion-left-sub ">
                                                <div className='imagen-left'>
                                                    <img src={billete} alt=""></img>
                                                </div>
                                                <span> from US$ 50,00</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='col-sm-12 col-md-7 col-lg-7 '>
                                        <p className='texto-comentario'>
                                            Lively beach with a promenade and bars.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam explicabo sequi debitis fuga facilis adipisci molestias nemo ut omnis! Rem accusamus exercitationem ea animi, dolor minima omnis mollitia deserunt!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti harum blanditiis ipsum quam praesen
                                        </p>
                                    </div>
                                </div>

                                <div className="comentarios-user">
                                    <div className='acordion-box'>
                                        <div className='comentario-user-imag'>
                                            <img src={avatar1} alt=""></img>
                                        </div>
                                        <div className='comentario-user-tex'>
                                            <p>I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ad, odit
                                                provident earum voluptatibus magnam aut velit placeat ex reiciendis doloremque,
                                                excepturi itaque, laboriosam dolorum consequatur ducimus sed est! </p>
                                        </div>
                                    </div>
                                    <div className='acordion-box'>
                                        <div className='comentario-user-imag'>
                                            <img src={avatar1} alt=""></img>
                                        </div>
                                        <div className='comentario-user-tex'>
                                            <p>I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ad, odit
                                                provident earum voluptatibus magnam aut velit placeat ex reiciendis doloremque,
                                                excepturi itaque, laboriosam dolorum consequatur ducimus sed est! </p>
                                        </div>
                                    </div>

                                    <div className="mb-3">

                                        <form>
                                            <textarea name="textarea" placeholder="Write us ....."
                                                className='city-texarea'></textarea>
                                        </form>

                                        <div className="btn-comentario-form">
                                            <button className="btn btn-primary">Send <i className="fas fa-paper-plane"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                                >
                                
                                <span className="boton-comentario-text">See More</span>
                            </button>
                        </h2>
                    </div>


                </div>
            </div>

           
        </>
    )
}

export default Comentario
