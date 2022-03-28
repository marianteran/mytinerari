import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from "axios";
import swal from 'sweetalert';

const Google = () => {

    const responseGoogle = async (response) => {
        //console.log(response);

        const NuevoUsuario = {
            imguser: response.profileObj.imageUrl,
            firstname: response.profileObj.givenName,
            lastname:response.profileObj.familyName ,
            email: response.profileObj.email,
            password: response.googleId+"aA",
            from: "google"
        }

        await axios.post("http://localhost:4000/api/signup", { NuevoUsuario })
        .then(response =>{ 
            //console.log(response)
            if (response.data.success === "falseVAL") {
                let detailsError = response.data.response.error.details
                //console.log(detailsError)
                    detailsError.map(error => 
                    swal({
                    title:" error",
                    icon: "error",
                    text:error.message,
                    buttons:"ok"
                    }))
            }
            else if (response.data.success === true) { //nuevo usuario creado envia email
                //console.log(alert(data.response))
                swal({
                    title:response.data.response,
                    icon:"success",
                    buttons: "ok"
                })
      
      
            }else if (response.data.success === false) {
                //console.log(alert(data.response)) // usuario ya existe
                swal({
                    title:response.data.response,
                    icon:"success",
                    buttons: "ok"
                })
      
            }
        })

    }





    return (
        <div>

            
                <GoogleLogin

                    clientId="831751011945-deholj4p37i86qm68sg5nkfctlvcrone.apps.googleusercontent.com"
                    buttonText="Sign Up With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="google"
                    />

        </div>
    )
}

export default Google