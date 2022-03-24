import React from 'react'
import swal from 'sweetalert';
import FacebookLogin from 'react-facebook-login';
import axios from "axios";

import {ImFacebook2} from 'react-icons/im'



const Facebook = () => {

  const responseFacebook = async (response) => {
    //console.log(response);

    const NuevoUsuario = {
      imguser:response.picture.data.url,
      firstname: response.name,
      lastname: "facebook",
      email: response.email,
      password: response.id+"aA",
      from:"facebook"
    }

    await axios.post("http://localhost:4000/api/signup",{NuevoUsuario}) 
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


      } else if (response.data.success === false) {
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


   
    
      <FacebookLogin
        
        appId="768469901223535"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="signupbtn-faceb"
        icon={<ImFacebook2 className='iconface' />}
        
        />



    </div>
  )
}

export default Facebook