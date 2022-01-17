import React from 'react'
import Switch from '@mui/material/Switch'

export default function Buscador() {

    const [checked, setChecked] = React.useState(true);
    const [filtro, setFiltro] = React.useState("Filter by Cities");

    const handleChange = (event) => {
        setChecked(event.target.checked);
        event.target.checked ? setFiltro("Filter by Country") : setFiltro(" Filter by Cities")

    }

    return (
        <>

            <div className="container mt-5">
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
                        ></input>
                    
                    </div>
                </div>






            </div>





        </>
    )
}

