import React from 'react'
//import Switch from '@mui/material/Switch'
import { actionTypes } from '../core/context/reducer';
import { useStateValue } from "../core/context/StateProvider"

export default function Buscador() {


    const [{ cities }, dispatch] = useStateValue

    const imputSerch = (event) => {
        dispatch({
            type: actionTypes.FILTER,
            value: event.target.value

        })
    }



    return (
        <>

            <div>
                <h1>Buscador</h1>
                <form name='search'>
                    <input type="text" name="txt" onChange={imputSerch}></input>

                </form>
            </div>



        </>
    )
}

