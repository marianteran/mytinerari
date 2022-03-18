import React, { useEffect } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";

import { actionTypes } from "../core/context/reducer";
import { useStateValue } from '../core/context/StateProvider';


import swal from 'sweetalert';


import FacebookIN from "../components/signinbtn/FacebookIN";
import GoogleIN from "../components/signinbtn/GoogleIN";



const SignIn = () => {

    const [{ user }, dispatch] = useStateValue()

   

    async function loginUser(event) {
        console.log(event)
        event.preventDefault()
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value
        }


        await axios.post("http://localhost:4000/api/signIn", { userData })
            .then(response => {

                if (response.data.success === false) {
                    swal({
                        title: "error",
                        icon: "error",
                        text: response.data.error,
                        buttons: "ok",
                        customClass:"swal"
                    })
                } else if (response.data.success === true) {
                    //console.log(response.data)
                    localStorage.setItem("token", response.data.response.token)
                    swal({
                        title: "Welcome",
                        icon: "success",
                        buttons: "ok",
                        customClass:"swal"
                    })
                }
                dispatch({
                    type: actionTypes.USER,
                    user: response.data.response
                })



            })

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        < >
            <main className='login' >


                <div className="container contenedor-login" >
 
                    <div className="d-flex justify-content-center h-100">
                        
                        <div className="card-login">
                            <div className="card-header-login">
                                <h3 className='mt-4'>Welcome Back!</h3>

                            </div>
                            <div className="card-body">
                                <form onSubmit={loginUser}>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="mail" className="form-control my-2" placeholder="Email"></input>
                                    </div>

                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control my-2" placeholder="Password"></input>
                                    </div>



                                    <div className="form-group">

                                    <button type="submit" value="Login" className="btn float-right login_btn mt-4">Sign In</button>


                                   {/*  {loginUser? <LinkRouter className="dropdown-item "to="/user">
                                            <button type="submit" value="Login" className="btn float-right login_btn mt-4">Sign In</button>
                                        </LinkRouter> :''} */}


                                    
                                       {/*  <LinkRouter className="dropdown-item "to="/user">
                                            <button type="submit" value="Login" className="btn float-right login_btn mt-4">Sign In</button>
                                        </LinkRouter> */}
                                    </div>
                                </form>


                              


                            </div>

                            

                            <div className="content-btn-signup">
                          
                          <div className="boton-goog-face"> 
                          <GoogleIN />
                          </div> 
                          <div className="boton-goog-face"> 
                          <FacebookIN />
                          </div> 
                          
                      </div>

                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account yet?<LinkRouter to="/signup">Sign Up</LinkRouter>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default SignIn
