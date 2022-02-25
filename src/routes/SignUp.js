import React,{useEffect} from "react";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    async function crearUsuario(event) {
        console.log(event)
        event.preventDefault()
        const NuevoUsuario= {firstname:event.target[0].value,
                    lastname:event.target[1].value,
                    email:event.target[2].value,
                    password:event.target[3].value}
        
      await axios.post("http://localhost:4000/api/signup",{NuevoUsuario}) 
      .then(response=>

        displayMessage(response.data)
        )

        function displayMessage(data){
            if (data.success === "falseVAL") {
                console.log(data.response.error.details)
                data.response.error.details.map(error=>alert(error.message))
                
            }
        }
        
    }



    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      
    return (
        <>
            <main className='register'>
                <div className="container contenedor-register">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card-register">
                            <div className="card-header">
                                <h3 className='mt-4'>Sign Up!</h3>

                            </div>
                            <div className="card-body">
                                <form onSubmit={crearUsuario}>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control my-2" name="firstname" placeholder="First Name"></input>

                                    </div>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-users-cog"></i></span>
                                        </div>
                                        <input type="text" className="form-control my-2" name="lastname" placeholder="Last Name"></input>

                                    </div>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="mail" className="form-control my-2" name="email"  placeholder="Email"></input>
                                    </div>
                                 
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control my-2" name="password" placeholder="Password"></input>
                                    </div>
                                  
                                    

                                    <div className="form-group">
                                        <button type="submit" value="" className="btn float-right login_btn my-2">Sign Up</button>
                                    </div>
                                </form>


                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    You have an account?<LinkRouter to="/signin">Sign In</LinkRouter>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp