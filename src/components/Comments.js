import React, { useState, useEffect } from 'react'
import { useStateValue } from "../core/context/StateProvider"
import axios from "axios";

import avatar1 from '../imagen/avatar/avatar1.jpg'

import swal from 'sweetalert';

const Comments = (props) => {

    const [comment, setComment] = useState()

    const [{ user }, dispatch] = useStateValue()

    const [reload, setReload] = useState(false)

    const [cambio, setCambio] = useState()

    /*  let owner = props.user.datosUser.id === props._id ? true : false */

    const submitComent = async (event) => {

        event.preventDefault()

        const dataComents = {
            itinerario: props.itinerario,
            mensage: event.target[0].value,
            user: user.datosUser.id
        }

        await axios.post("http://localhost:4000/api/comments", { dataComents })
            .then(response =>
                setComment(response.data.response.comentario))
        setReload(!reload)
    }



    useEffect(() => {
        let id = props.itinerario
        axios.get(`http://localhost:4000/api/comments/${id} `)
            .then(response => {
                setComment(response.data.response.comentario)
            })

        console.log(comment)

    }, [reload])



    const borrarComentario = (id) => {
        axios.delete(`http://localhost:4000/api/comments/${id} `)
            .then(response => {
                swal({
                    text: response.data.mensage,
                    buttons: "ok",
                })
            })
    }


    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {
        console.log(id)
        let data = cambio
        axios.put(`http://localhost:4000/api/comments/${id} `, { data })
            .then(response => {
                swal({
                    text: response.data.mensage,
                    buttons: "ok",
                })
            })
        setReload(!reload)



    }


    /*  const aviso =()=>{
         return( 
         swal({
             text: "You must to be logged in to post a comment",
             buttons: "ok",
 
         }))
     } */


    return (
        <>


            <div className="comentarios-user">

                {comment?.map(item =>
                    <div className='acordion-box'>
                        <div className='comentario-user-imag'>
                            <img src={avatar1} alt=""></img>
                            <p>{item.user.firstname}</p>
                        </div>


                        <div className='comentario-user-tex'>
                            <input onKeyUp={handelChange} defaultValue={item.comment}></input>
                        </div>

                        <div className='btn-delete-up'>
                            <button className='btn btn-primary mx-2' onClick={() => borrarComentario(item._id)}><i class="fas fa-trash-alt"></i></button>

                            <button className='btn btn-primary' onClick={() => modificar(item._id)}><i class="fas fa-edit"></i></button>
                        </div>


                            {/* enviado x adrian */}
                      {/*   {!modifyComment 
                        ? 
				            <p>{props.newComment.comment}</p>
                        :<>
                            <input type="text" defaultValue={props.newComment.comment} ref={handelChange}/>
                            <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, handelChange.current.value, props.token)}/>
                        </>
                        } */}

                            {/* modificado */}

                        {/*   {!modificar 
                        ? 
				            <p>{props.newComment.comment}</p>
                        :<>
                            <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
                            <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
                        </>
                        } */}



                    </div>

                )}
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
            </div>





        </>
    )
}

export default Comments


     {/*   {owner ?
                        <form onSubmit={submitComent}>
                            <textarea name="textarea" placeholder="Write us ....."
                                className='city-texarea'></textarea>
                            <div className="btn-comentario-form">
                                <button type='submit' className="btn btn-primary">Send <i className="fas fa-paper-plane"></i></button>
                            </div>

                        </form>

                        :   
                        <form onSubmit={submitComent}>
                            <textarea name="textarea" placeholder="Write us ....."
                                className='city-texarea'></textarea>
                            <div className="btn-comentario-form">
                                <button type='submit' className="btn btn-primary" onClick={aviso}>Send <i className="fas fa-paper-plane"></i></button>
                            </div>

                        </form>
                         } */}