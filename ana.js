import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useStateValue } from "../../StateProvider";
import usuario from "../../img/persons/usuario.jpg";
import dots from "../../img/icons/dots.png";



const Comments = (props) => {
  
  var date = useState()
  const [comments, setComments] = useState ()
  const [{ user }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false)
  const [cambio, setCambio] = useState();

  
  const submitComment = async (event) => {
    event.preventDefault();

    function fecha() {
      var registro = new Date()
      var dia = registro.getDate()
      var mes = registro.getMonth() +1
      var year = registro.getFullYear()
      date = mes + "." + dia + "." + year
    }


    fecha()
    const dataComments = {
        title: props.itinerario,
        message: event.target[0].value,
        user: user.datosUser.id,
        date:date
      };



      await axios.post("http://localhost:4000/api/comentarios",{dataComments})
      .then(response=>setComments(response.data.response.comentario))
      setReload(!reload)
  };



  useEffect(() => {
    let id = props.itinerario
    axios.get(`http://localhost:4000/api/comentarios/${id}`)
    .then(response=> setComments(response.data.response.comentario)
      )
    },[reload]);



    const borrarComentario = (id) =>{
      axios.delete(`http://localhost:4000/api/comentarios/${id}`)
      setReload(!reload)
    }

    const handleChange = (event) => {
      setCambio(event.target.value)
    }
    
    const modificar = (id) =>{
      console.log(id)
      console.log(cambio)
      let data = cambio
      axios.put(`http://localhost:4000/api/comentarios/${id}`,{data})
      setReload(!reload)
    }

  return (
    <div>
      
      {comments?.map(item=> 
      <div className="usuariocity mt-4">
        <div className="icousuario">
          <img src={usuario} className="icousuario d-block w-100" alt="..." />
        </div>
        <div className="txtusuario2">
          <div>
            <h6>
              <strong>{item.user.firstname} {item.user.lastname} </strong>| {item.date}
            </h6>
          </div>
          <div className="txt1">

            <input className="cinput" onKeyUp={handleChange} defaultValue={item.mensaje}></input>

          </div>
        </div>

        <div className="dropdown">
            <button
              className="btn btn-transparency"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={dots} width="25" alt="logo" />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li><button onChange={()=>modificar(item._id)} type="button" className="btn" aria-label="modif">Modify</button></li>
              <li><button onClick={()=>borrarComentario(item._id)} type="button" className="btn" aria-label="eli">Eliminate</button></li>
            </ul>
          </div>


      </div>

      )}

      <div className="ciudadcomentario">
        <form onSubmit={submitComment}>
          <textarea
            type="submit"
            name="textarea"
            className="form-control form-input col-sm-6 col-md-10 mt-3 bradio"
            placeholder="Leave your comment..."
          >
            {" "}
          </textarea>
          <button type="submit" className="btn btn-warning mt-2 bradio2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Comments;