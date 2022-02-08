import React,{useEffect} from "react";

import CardCities from "../components/CardCities";
import Switch from "../components/Switch";


const Cities = (props) => {
    const cities = props.data
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <main className="cities">
                <div className="banner-cities">

                    <h1 className="cities-title">The Best City</h1>

                </div>

                <Switch />


                <CardCities cities={cities} />       

            </main>
        </>
    );
};

export default Cities; 
