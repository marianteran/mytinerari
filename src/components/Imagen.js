import React from 'react'

export default function Imagen({ like, props }) {
  console.log(props)
  return (
  <div>
   
      {like ?
          (<span>
            <i className='fas fa-heart dos'></i>
          </span>) :
          (<span>
            <i className='fas fa-heart'></i>
           
          </span>)}
  </div>
  )
  
  
}