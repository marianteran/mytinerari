import axios from 'axios';
import React, { useState } from 'react'
import { useStateValue } from '../core/context/StateProvider';


import avatar1 from '../imagen/avatar/avatar.png'




const LikesC = (props) => {
    const [{ user}, dispatch] = useStateValue()
    const [likes, setLikes] = useState(props.likes);

    //console.log(props)
    //console.log(user)


    const likeDislike = async()=>{
        const token= localStorage.getItem("token")
        //console.log(user)
        await axios.put(`https://mytinerary-marianela.herokuapp.com/api/likesDislike/${props.id}`,{},{
            headers:{
              'Authorization':'Bearer '+token
            }
          })
        .then(response=>
            setLikes(response.data.response))    
        
    }
   
   
    let colorhearth=likes?.includes(user?.datosUser.id)? 'fas fa-heart dos':"far fa-heart"
  
    
    
    return (
        <>
            <div className='content-usuario my-4 mx-auto'>

                {user? 
                    <div className='avatar'>
                        <img src={user.datosUser.imguser} alt=""></img>
                        
                    </div>
                :
                    <div className='avatar'>
                        <img src={avatar1} alt=""></img>
                       
                    </div>
                }
                

                { user?
                <div className='like '>
                    <button className="btn btn-like" onClick={likeDislike}><i className={colorhearth}></i></button>
                    <span>{likes?.length}</span>
                </div>
                :
                <div className='like '>
                <div className="btn btn-like" ><i className={colorhearth}></i></div>
                <span>{likes?.length}</span>
                </div>

                }
                

            </div>



        </>
    )
}

export default LikesC



/* {like ? 

    <div className='like '>

        <button className="btn btn-like" onClick={() => setLike(like + 1)}><i className='fas fa-heart dos'></i></button>
        <span>{like}</span>


    </div>
    :
    <div className='like '>

        <button className="btn btn-like" onClick={() => setLike(like -1)}><i className="far fa-heart"></i></button>
        <span>{like}</span>

    </div>

    } */