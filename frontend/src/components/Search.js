import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import { actionTypes } from '../core/context/reducer';
import { useStateValue } from "../core/context/StateProvider"
import { Link as LinkRouter } from "react-router-dom";

import globo from '../imagen/continent/globo.png'

const Search = () => {
    const [filtro, setFiltro] = React.useState("Filter by Cities");
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        event.target.checked ? setFiltro("Filter by Cities") : setFiltro("Filter by Country")

    }

    const [{ cities }, dispatch] = useStateValue()
    const inputSerch = (event) => {

        dispatch({
            type: actionTypes.FILTER,
            value: { value: event.target.value, filterBy: filtro }

        })
    }



    return (
        <>



            <div className="container mt-4">


                <div className='subtitle-principal'>
                    <h2>Find your new Adventure!</h2>
                </div>

                <div className="row">
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <h6 className='text-center'>{filtro}</h6>
                        <div className="col-sm-12 col-md-12col-lg-12">
                            <div className="text-center ">
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />

                            </div>

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

                    <div className='col-sm-12 col-md-6 col-lg-6'>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="text-center ">

                                <h6 className='text-center'>Filter by Continent</h6>

                            </div>

                            <div className="col-sm-12 col-md-12col-lg-12  content-input-switch">

                                <LinkRouter to="/continent" >
                                    <img src={globo} alt="world" className="btn-continent1"></img>
                                </LinkRouter>

                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </>
    )
}

export default Search