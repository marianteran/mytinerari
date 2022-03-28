import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import bg from '../imagen/fondos/footerbanner.jpg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContainer" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="phraseNav">
                        <div className="nameContainer">
                            <h3>Mytinerary</h3>
                            <div className="ps-5 d-none d-lg-block bilboPhrase">
                                <p>"Don't tell me how old you are or how well educated you are. Tell me how much you have traveled and I will tell you how much you know"</p>
                                <p> - Mahoma</p>
                            </div>
                        </div>
                        <nav>
                            <LinkRouter to="/" >Home</LinkRouter>
                            <LinkRouter to="/cities">Cities</LinkRouter>
                            <LinkRouter to="/signin">Sign in</LinkRouter>
                            <LinkRouter to="/signup">Sign up</LinkRouter>
                            
                        </nav>
                    </div>

                    <div className="finalContent">
                        <div className="socialMedia">
                            <a href="mailto:ingo@mytinerary.org" target="blank"  ><i className="fas fa-envelope-open-text"></i></a>
                            <a href="https://www.instagram.com/?hl=es-la" target="blank" ><i className="fab fa-instagram-square"></i></a>
                            <a href="https://es-la.facebook.com/" target="blank"  ><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/?lang=es" target="blank"  ><i className="fab fa-twitter"></i></a>
                            <a href="https://discord.com/login" target="blank"  ><i className="fab fa-discord"></i></a>
                        </div>
                        <span> Copyright &copy; Marianela Terán | MindHub | 2022 </span>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer

