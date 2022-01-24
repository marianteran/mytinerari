import React,{useEffect} from "react";
import { Link as LinkRouter } from "react-router-dom";

const Register = () => {
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
                                <h3 className='mt-4'>Register!</h3>

                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control my-2" placeholder="First Name"></input>

                                    </div>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text my-2"><i className="fas fa-users-cog"></i></span>
                                        </div>
                                        <input type="text" className="form-control my-2" placeholder="Last Name"></input>

                                    </div>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-portrait"></i></span>
                                        </div>
                                        <input type="img" className="form-control my-2" placeholder="Picture"></input>
                                    </div>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control my-2" placeholder="Password"></input>
                                    </div>
                                  
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text my-2"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="mail" className="form-control my-2" placeholder="Email"></input>
                                    </div>

                                    <div className="form-group">
                                        <input type="submit" value="Register" className="btn float-right login_btn my-2"></input>
                                    </div>
                                </form>


                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    You have an account?<LinkRouter to="/login">Sign In</LinkRouter>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register