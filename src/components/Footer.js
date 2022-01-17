import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="dark bg-dark mx-auto ">
             
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 mx-auto'>
                            <div className="">
                            <a  href="mailto:ingo@mytinerary.org" target="blank"  ><i className="fas fa-envelope-open-text"></i></a>
                        <a  href="https://www.instagram.com/?hl=es-la" target="blank" ><i className="fab fa-instagram-square"></i></a>
                        <a  href="https://es-la.facebook.com/" target="blank"  ><i className="fab fa-facebook"></i></a>
                        <a  href="https://twitter.com/?lang=es" target="blank"  ><i className="fab fa-twitter"></i></a>
                        <a  href="https://discord.com/login" target="blank"  ><i className="fab fa-discord"></i></a>

                            </div>
                        </div>
                    </div>
                </div>



                <div className=" pt-3 mx-auto">
                    <span>&#169; 2022 Mytinerary &#124; All Rights Reserved</span>

                </div>
                <div className="pt-3 mx-auto">
                    <span>Developer Marianela Terán</span>

                </div>

            </footer>
        </>
    )
}

export default Footer

