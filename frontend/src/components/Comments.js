import React, { useState, useEffect } from 'react'
import { useStateValue } from "../core/context/StateProvider"
import axios from "axios";

import avatar1 from '../imagen/avatar/avatar.png'

import swal from 'sweetalert';

const Comments = (props) => {

    const [comment, setComment] = useState()
    const [{ user }, dispatch] = useStateValue()
    const [reload, setReload] = useState(false)
    const [cambio, setCambio] = useState()

    console.log(comment)

    const submitComent = async (event) => {
        event.preventDefault()

        const dataComents = {
            itinerario: props.itinerario,
            mensage: event.target[0].value,
            user: user.datosUser.id
        }

        await axios.post("https://mytinerary-marianela.herokuapp.com/api/comments", { dataComents })
            .then(response =>
                setComment(response.data.response.comentario))
        setReload(!reload)
    }



    useEffect(() => {
        let id = props.itinerario
        axios.get(`https://mytinerary-marianela.herokuapp.com/api/comments/${id} `)
            .then(response => {
                setComment(response.data.response.comentario)
            })

        //console.log(comment)

    }, [reload])



    const borrarComentario = async (id) => {
        await axios.delete(`https://mytinerary-marianela.herokuapp.com/api/comments/${id} `)
            .then(response => {
                swal({
                    text: response.data.mensage,
                    buttons: "ok",
                })
            })
        setReload(!reload)
    }


    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = async (id) => {
        console.log(id)
        let data = cambio
        await axios.put(`https://mytinerary-marianela.herokuapp.com/api/comments/${id} `, { data })
            .then(response => {
                swal({
                    text: response.data.mensage,
                    buttons: "ok",
                })

                console.log(response)
            })
        setReload(!reload)


    }


    //console.log(comment)
    //console.log(user)


    return (
        <>


            <div className="comentarios-user">

                {comment?.map(item =>
                    <div className='acordion-box' key={item.comment}>
                        <div className='comentario-user-imag'>
                            {/* <img src={item.user.imguser} alt=""></img> */}

                            




                            <p>{item.user.firstname}</p>
                        </div>


                        {user?.datosUser.id === item.user._id ?
                            <div>
                                <div className='comentario-user-tex'>
                                    <input onKeyUp={handelChange} defaultValue={item.comment}></input>
                                </div>

                                <div className='btn-delete-up'>
                                    <button className='btn btn-primary mx-2' onClick={() => borrarComentario(item._id)}><i className="fas fa-trash-alt"></i></button>

                                    <button className='btn btn-primary' onClick={() => modificar(item._id)}><i className="fas fa-edit"></i></button>
                                </div>
                            </div>
                            :
                            <div className='comentario-user-tex'>
                                <div >{item.comment}</div>
                            </div>
                        }


                    </div>

                )}

                {user ?
                    <div className="mb-3">
                        <form onSubmit={submitComent}>
                            <textarea name="textarea" placeholder="Write us ....."
                                className='city-texarea'>
                            </textarea>

                            <div className="btn-comentario-form">
                                <button type='submit' className="btn btn-primary" >Send<i className="fas fa-paper-plane"></i></button>
                            </div>
                        </form>

                    </div>
                    :
                    <div className='comentario-user-tex-2'>
                        <p className='mx-auto'>You must be logged in to comment</p>
                    </div>
                }
            </div>





        </>
    )
}

export default Comments

