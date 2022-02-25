import React,{useEffect} from "react";


import { Link as LinkRouter } from "react-router-dom";

const SignIn = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      
    return (
        < >
            <main className='login' > 
                <div className="container contenedor-login" >
                    <div className="d-flex justify-content-center h-100">
                        <div className="card-login">
                            <div className="card-header-login">
                                <h3 className='mt-4'>Welcome!</h3>

                            </div>
                            <div className="card-body">
                                <form>
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
                                        <input type="submit" value="Login" className="btn float-right login_btn mt-4"></input>
                                    </div>
                                </form>


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
