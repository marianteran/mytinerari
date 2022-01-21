import React from 'react'


// fotos
import copaCabana from "../imagen/tours/copaCabana.jpg";
import copaCabana2 from "../imagen/tours/copaCabana2.jpg";
import copaCabana3 from "../imagen/tours/copaCabana3.jpg";
import maracana1 from "../imagen/tours/maracana1.jpg";
import maracana2 from "../imagen/tours/maracana2.jpg";
import maracana3 from "../imagen/tours/maracana3.jpg";

import avatar1 from "../imagen/avatar/avatar1.jpg";

import Avatar from '@mui/material/Avatar';


import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { Box } from '@mui/system';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';
import { useState } from "react";





const useStyle = makeStyles({
    root: {
        backgroundColor: '#2B6086',
        border:0

    }
})


const Comentario = () => {

    const classes = useStyle()

    const [like, setLike] = useState(0);
    const aumentar=()=>{
        setLike(like + 1)
        // console.log(contador)
    }

    
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
                <h2 className='name-comentario mb-4'>Praia de Copacabana</h2>
                <div className='imagenes-comentario'>

                    <div className='mb-2'>
                        <div className='comentario-card'>
                            <div className="comentario-imag" >
                                <img src={copaCabana} alt="images" ></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className='comentario-card'>
                            <div className="comentario-imag" >
                                <img src={copaCabana2} alt="images"></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className='comentario-card'>
                            <div className="comentario-imag" >
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
                        <button className="btn love" onClick={aumentar}><i className="fas fa-heart"></i></button>
                        <span>{like}</span>

                    </div>

                </div>


                <Accordion className={classes.root}>

                    <AccordionSummary


                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.root}
                        sx={{ border: 0 }}> 





                    </AccordionSummary>

                    <AccordionDetails
                        className={classes.root}
                        sx={{ border: 0 }}
                    >
                        <div className='row mb-4'>
                            <div className='col-sm-12 col-md-5 col-lg-5  titulo-comentario text-center'>


                                <div className='col-sm-12 col-md-12 price'>
                                    <h4 >Praia de Copacabana</h4>
                                </div>
                                <div className='col-sm-12 col-md-12 price'>
                                    Duration: 2 horas
                                </div>
                                <div className='col-sm-12 col-md-12 price '>
                                    Price: 2<i className="fas fa-money-bill-alt"></i>
                                </div>

                            </div>

                            <div className='col-sm-12 col-md-7 col-lg-7 texto'>
                                <p className='texto-comentario'>
                                    Lively beach with a promenade and bars.
                                </p>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className='acordion-box'>
                                <div className='acordion-image'>
                                    <Avatar alt="Remy Sharp" src="../imagen/avatar/avatar1.jpg" />
                                </div>
                                <div className='acordion-tex'>
                                    <p>I like </p>
                                </div>
                            </div>
                            <div className='acordion-box'>
                                <div className='acordion-image'>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </div>
                                <div className='acordion-tex'>
                                    <p>I like </p>
                                </div>
                            </div>

                            <div className="mb-3">

                                <form>
                                    <textarea name="textarea" placeholder="Write us ....." className='city-texarea' ></textarea>
                                </form>

                                <Box textAlign='right'
                                >
                                    <Button variant="contained"
                                        size="large"
                                        sx={{ mr: 8 }}
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </Box>



                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>


            </div>

            <div className='fondo-comentario mx-auto'>
                <h2 className='name-comentario mb-4'>The Maracana Stadium</h2>
                <div className='imagenes-comentario'>

                    <div className='mb-2'>
                        <div className='comentario-card'>
                            <div className="comentario-imag" >
                                <img src={maracana1} alt="images" className='card-img-top'></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className='comentario-card'>
                            <div className="comentario-imag" >
                                <img src={maracana2} alt="images" className='card-img-top'></img>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className='comentario-card'>
                            <div className="comentario-imag" >
                                <img src={maracana3} alt="images" className='card-img-top'></img>
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

                    <button className="btn love" onClick={aumentar}><i className="fas fa-heart"></i></button>
                        <span>{like}</span>

                    </div>

                </div>

                <Accordion className={classes.root} sx={{ border: 0 }}>

                    <AccordionSummary
                        
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.root}
                        sx={{ border: 0 }}
                    >
                      <div className='text-center'>Click to Expand</div>
                    </AccordionSummary>

                    <AccordionDetails
                        className={classes.root}
                        sx={{ border: 0 }}
                    >
                        <div className='row mb-4'>
                            <div className='col-sm-12 col-md-5 col-lg-5  titulo-comentario text-center'>
                                <div className='col-sm-12 col-md-12 price'>
                                    <h4 >The Maracana Stadium</h4>
                                </div>
                                <div className='col-sm-12 col-md-12 price'>
                                    Duration: 2 horas
                                </div>
                                <div className='col-sm-12 col-md-12 price '>
                                    Price: 2<i className="fas fa-money-bill-alt"></i>
                                </div>



                            </div>

                            <div className='col-sm-12 col-md-7 col-lg-7 texto'>
                                <p className='texto-comentario'>
                                    Formally Estadio Jornalista Mario Filho, is a football stadium located in the city of Rio de Janeiro, Brazil. Its address is Rua Professor Eurico Rabelo, Maracana. It is the largest stadium in Brazil
                                </p>
                            </div>

                        </div>


                        <div className="accordion-body">

                            <div className="mb-3">

                                <div className='no-comments'>
                                   
                                    <p className='no-comments-tex'>There are no comments on this itinerary, be the first!</p>
                                   
                                </div>



                                <form>
                                    <textarea name="textarea" placeholder="Write us ....." className='city-texarea' ></textarea>
                                </form>

                                <Box textAlign='right'
                                >
                                    <Button variant="contained"
                                        size="large"
                                        sx={{ mr: 8 }}
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </Box>

                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>


            </div>


        </>
    )
}

export default Comentario
