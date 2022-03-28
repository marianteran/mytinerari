import React from 'react'
import { actionTypes } from "../../core/context/reducer";
import { useStateValue } from '../../core/context/StateProvider';
import GoogleLogin from 'react-google-login';
import axios from "axios";
import swal from 'sweetalert';


const GoogleIN = () => {
  const [{ user }, dispatch] = useStateValue()

  const responseGoogle = async (response) => {
    //console.log(response);

    const userData = {
      email: response.profileObj.email,
      password: response.googleId + "aA",
    }


    await axios.post("https://mytinerary-marianela.herokuapp.com/api/signIn", { userData })
      .then(response => {

        if (response.data.success === false) {
          swal({
            title: "error",
            icon: "error",
            text: response.data.error,
            buttons: "ok"
          })
        } else if (response.data.success === true) {
          localStorage.setItem("token", response.data.response.token)
          swal({
            title: "Welcome",
            icon: "success",
            buttons: "ok"
          })
        }
        dispatch({
          type: actionTypes.USER,
          user: response.data.response
        })



      })


  }
  return (
    <div> <GoogleLogin
      clientId="831751011945-deholj4p37i86qm68sg5nkfctlvcrone.apps.googleusercontent.com"
      buttonText="Sign In With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    /></div>
  )
}

export default GoogleIN