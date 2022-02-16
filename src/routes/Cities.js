import React,{useEffect} from "react";

import CardCities from "../components/CardCities";
import Switch from "../components/Switch";

import Button from "@mui/material/Button";


const Cities = (props) => {
    const cities = props.data

    console.log(cities)
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <main className="cities">
                <div className="banner-cities">

                    <h1 className="cities-title">The Best City</h1> 

                </div>

                <Button variant="contained" href="/city" size="large">
                                            Prueba City
                </Button>

                <Switch />


                <CardCities cities={cities} />       

            </main>
        </>
    );
};

export default Cities; 
