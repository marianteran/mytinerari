import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";

import swal from 'sweetalert';
import Facebook from "../components/signupbtn/Facebook";
import Google from "../components/signupbtn/Google";


import like from "../imagen/sign/like.png"
import comment from "../imagen/sign/comment.png"
import bguser from "../imagen/datouser/avatar1.png"


/* import woman from '../imagen/datouser/avatarmujer.jpg'
import male from '../imagen/datouser/avatarhombre.jpg' */

const option={

    defect:"",
    woman:'../imagen/datouser/avatarmujer.jpg',
    male:'../imagen/datouser/avatarhombre.jpg'
}






const SignUp = () => {

    

    async function crearUsuario(event) {
        //console.log(event)
        event.preventDefault()
        let name = event.target[0].value
        let lastName = event.target[1].value
        let iniciales = name.charAt(0) + lastName.charAt(0)

       

        const NuevoUsuario = {
            imguser: iniciales.toUpperCase(),
            firstname: event.target[0].value,
            lastname: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            from: "signup"


        }

        //console.log(NuevoUsuario)
        //console.log(event.target)

        await axios.post("https://mytinerary-marianela.herokuapp.com/api/signup", { NuevoUsuario })
            .then(response => {

                if (response.data.success === "falseVAL") {
                    let detailsError = response.data.response.error.details

                    detailsError.map(error =>
                        swal({
                            title: " error",
                            icon: "error",
                            text: error.message,
                            buttons: "ok"
                        }))
                }
                else if (response.data.success === true) { //nuevo usuario creado envia email
                    //console.log(alert(data.response))
                    swal({
                        title: response.data.response,
                        icon: "success",
                        buttons: "ok"
                    })


                } else if (response.data.success === false) {
                    //console.log(alert(data.response)) // usuario ya existe
                    swal({
                        title: response.data.response,
                        icon: "success",
                        buttons: "ok"
                    })

                }

            })



    }




    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (


        <>


            <main className='register'>

                <div className="title-siginup">

                    <h1 className="text-center">Create Account</h1>
                    <h4 className="text-center">Please fill in the form to get access to all the features.</h4>

                </div>
                <div className="container contenedor-register">


                    <div className="contenedor-signup">
                        <div className="card-register">

                            <div className="card-body">

                                {/* <div className="content-changeUser">
                                    <div className="changeUser"
                                        style={{ backgroundImage: `url(${bguser})` }}></div>
                                    <p>Change photo enter url</p>

                                </div> */}


                                <form onSubmit={crearUsuario} className="mx-auto">

                                    {/*  <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-image"></i></span>
                                        </div>
                                        <input name='imguser' type='text' className="form-control my-2" placeholder="Put image url"></input>

                                    </div>  */}

                                    {/* <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-image"></i></span>
                                        </div>
                                        <select value={option} className="form-control my-2" >
                                            <option value="woman">avatar 1</option>
                                            <option value="male">avatar 2</option>
                                      
                                        </select>

                                    </div> */}



                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control my-2" name="firstname" placeholder="First Name" required></input>

                                    </div>


                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-user-plus"></i></span>
                                        </div>
                                        <input type="text" className="form-control my-2" name="lastname" placeholder="Last Name" required></input>

                                    </div>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="mail" className="form-control my-2" name="email" placeholder="Email" required></input>
                                    </div>

                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control my-2" name="password" placeholder="Password" required></input>
                                    </div>



                                    <div className="form-group">
                                        <button type="submit" value="" className="btn float-right login_btn my-2">Sign Up</button>
                                    </div>
                                </form>

                            </div>

                            

                            <div className="content-btn-signup">

                                <div className="boton-goog-face">
                                    <Google />
                                </div>
                                <div className="boton-goog-face">
                                    <Facebook />
                                </div>

                            </div>



                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    You have an account?<LinkRouter to="/signin">Sign In</LinkRouter>
                                </div>

                            </div>


                        </div>


                        <div className="benefitsContainer" >
                            <div className="description">
                                <img src={like} alt="" ></img>
                                <p>You will be able to like itineraries you want and save them in your profile to watch them later.</p>
                            </div>
                            <div className="description">
                                <p>Without registration you can read all users comments. But post a new comment is only available for registered users.</p>
                                <img src={comment} alt="" ></img>
                            </div>

                        </div>




                    </div>


                </div>
            </main>
        </>
    )
}

export default SignUp





/*  imguser:event.target[0].value,
 firstname: event.target[1].value,
 lastname: event.target[2].value,
 email: event.target[3].value,
 password: event.target[4].value,
 from: "signup"
*/



/* .then(response => {
              
    if (response.data.success === "falseVAL") {
        let detailsError = response.data.response.error.details
        
        detailsError.map(error =>
            swal({
                title: " error",
                icon: "error",
                text: error.message,
                buttons: "ok"
            }))
    }
    else if (response.data.success === true) { //nuevo usuario creado envia email
        //console.log(alert(data.response))
        swal({
            title: response.data.response,
            icon: "success",
            buttons: "ok"
        })


    } else if (response.data.success === false) {
        //console.log(alert(data.response)) // usuario ya existe
        swal({
            title: response.data.response,
            icon: "success",
            buttons: "ok"
        })

    } */