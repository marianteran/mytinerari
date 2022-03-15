import React from 'react'
import swal from 'sweetalert';
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import {ImFacebook2} from 'react-icons/im'

import { actionTypes } from "../../core/context/reducer";
import { useStateValue } from '../../core/context/StateProvider';

const FacebookIN = () => {
    const [{ user }, dispatch] = useStateValue()

    const responseFacebook = async (response) => {
    console.log(response);

    const userData = {
        email: response.email,
        password: response.id+"aA",
       

    }


    await axios.post("http://localhost:4000/api/signIn", { userData })
        .then(response => {

            

            if (response.data.success === false) {
                swal({
                    title: "error",
                    icon: "error",
                    text: response.data.error,
                    buttons: "ok"
                })
            } else if (response.data.success === true) {
                swal({
                    title: "Welcome" ,
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
    <div>  
      
       <FacebookLogin

      appId="768469901223535"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

      cssClass="signupbtn-faceb"
      icon={<ImFacebook2 className='iconface' />}

    /></div>
  )
}

export default FacebookIN