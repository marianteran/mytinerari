import React from 'react'

import Slider from "../components/Slider";

import bb from "../imagen/city/bb.jpg";
import rio from "../imagen/city/rio.jpg";
import Background from '../imagen/city/rio2.jpg';


import Avatar from '@mui/material/Avatar';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';



export default class City extends React.Component {


    render() {



        return (
            <>

                <main className="city">

                    <div className="banner-city">

                        <h1 className="city-title">Rio de Janeiro</h1>

                    </div>



                    <div className="mt-5 mb-5">
                        <div className="container mt-5 mb-0">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="titlepage text-center ">
                                        <h2>Rio de Janeiro</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='container my-5 bandera'>
                            <div className="flip">
                                <img src={bb} alt='' className="flip-1" ></img>
                            </div>
                        </div>


                        <div className="information " style={{ backgroundImage: `url(${Background})` }}>
                            <div className=" container container-information  mx-auto" >
                                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 information-text">
                                    <h3>Rio de Janeiro</h3>
                                    <h4>Brasil</h4>
                                    <p>
                                        Is a huge coastal city in Brazil, famous for its Copacabana and Ipanema beaches, the 38-meter-high Christ the Redeemer statue on Corcovado hill, and the Sugarloaf Mountain, a granite peak with cable cars that ascend to its top. The city is also known for its extensive favelas. The raucous Carnival festival, with float parades, flamboyant costumes and samba dancers, is considered the largest in the world.
                                    </p>

                                    <div className="information-lin">
                                        <div><i className="fas fa-money-bill-wave"></i> Real Brasileño</div>
                                        <div><i className="fas fa-language"></i> Portugués</div>
                                        <div><i className="fas fa-map-marker-alt"></i>Sur America</div>

                                    </div>

                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-5  col-lg-5 text-center ">
                                    <img src={rio} alt="" className="" ></img>
                                </div>

                                <div className="accordion " id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <FavoriteIcon sx={{ color: blue[700], mr: 3 }} />
                                                <ThumbUpAltIcon sx={{ color: blue[700], mr: 3 }}  />

                                                <Stack direction="row" spacing={3}>
                                                    <Avatar alt="Remy Sharp" src="../imagen/avatar/avatar1.jpg" />
                                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                                </Stack>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                                                        <textarea name="textarea" value="Write us..." className='city-texarea' ></textarea>
                                                    </form>

                                                    <Box textAlign='right'
                                                    >
                                                        <Button variant="contained"
                                                            size="small"
                                                            sx={{ mr: 8 }}
                                                            endIcon={<SendIcon />}
                                                        >
                                                            Send
                                                        </Button>
                                                    </Box>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


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