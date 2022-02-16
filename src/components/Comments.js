import React from 'react'

import avatar1 from '../imagen/avatar/avatar1.jpg'

const Comments = () => {
  return (
    <>
     <div className="comentarios-user">
                                    <div className='acordion-box'>
                                        <div className='comentario-user-imag'>
                                            <img src={avatar1} alt=""></img>
                                        </div>
                                        <div className='comentario-user-tex'>
                                            <p>I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ad, odit
                                                provident earum voluptatibus magnam aut velit placeat ex reiciendis doloremque,
                                                excepturi itaque, laboriosam dolorum consequatur ducimus sed est! </p>
                                        </div>
                                    </div>
                                    <div className='acordion-box'>
                                        <div className='comentario-user-imag'>
                                            <img src={avatar1} alt=""></img>
                                        </div>
                                        <div className='comentario-user-tex'>
                                            <p>I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum ad, odit
                                                provident earum voluptatibus magnam aut velit placeat ex reiciendis doloremque,
                                                excepturi itaque, laboriosam dolorum consequatur ducimus sed est! </p>
                                        </div>
                                    </div>

                                    <div className="mb-3">

                                        <form>
                                            <textarea name="textarea" placeholder="Write us ....."
                                                className='city-texarea'></textarea>
                                        </form>

                                        <div className="btn-comentario-form">
                                            <button className="btn btn-primary">Send <i className="fas fa-paper-plane"></i></button>
                                        </div>

                                    </div>
                                </div>
    </>
  )
}

export default Comments