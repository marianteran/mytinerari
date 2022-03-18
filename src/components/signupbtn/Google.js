import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from "axios";

const Google = () => {

    const responseGoogle = async (response) => {
        console.log(response);

        const NuevoUsuario = {
            firstname: response.profileObj.givenName,
            lastname:response.profileObj.familyName ,
            email: response.profileObj.email,
            password: response.googleId+"aA",
            from: "google"
        }

        await axios.post("http://localhost:4000/api/signup", { NuevoUsuario })
            .then(response =>
                displayMessage(response.data)
            )
        function displayMessage(data) {
            if (data.success === "falseVAL") {
                console.log(data.response.error.details)

                data.response.error.details.map(error => alert(error.message))
            }
            else if (data.success === true) {
                console.log(alert(data.response))
            }
            else if (data.success === false) {
                console.log(alert(data.response)) // usuario ya existe

            }
        }


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