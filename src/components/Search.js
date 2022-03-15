import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import { actionTypes } from '../core/context/reducer';
import { useStateValue } from "../core/context/StateProvider"

const Search = () => {
  const [filtro, setFiltro] = React.useState("Filter by Cities");
 const [checked, setChecked] = React.useState(true); 



    const [{cities}, dispatch]=useStateValue()

    const inputSerch=(event)=>{
        dispatch({
            type: actionTypes.FILTER,
            value: event.target.value

        })
    }

   const handleChange = (event) => {
        setChecked(event.target.checked);
        event.target.checked ? setFiltro("Filter by Cities") : setFiltro(" Filter by Continent")

    } 

 

    return (
        <>



            <div className="container mt-4">
            <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="titlepage text-center ">
                            <h2>{filtro}</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="text-center ">
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />

                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-sm-12 col-md-12col-lg-12  content-input-switch">
                        <input
                            type="text"
                            id="filtroBusqueda"
                            placeholder={filtro}
                            className="form-control selector text-center"
                            onChange={inputSerch}
                        ></input>
                    
                    </div>
                </div>


            </div>



    



        </>
    )
}

export default Search