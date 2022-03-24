import React,{useEffect} from "react";
import CardCities from "../components/CardCities";

import Button from "@mui/material/Button";

import Search from "../components/Search"


const Cities = () => {

    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <main className="cities">
                <div className="banner-cities">

                    <h1 className="cities-title">The best Cities</h1> 

                </div>

                <Search/>
                <CardCities/>       

            </main>
        </>
    );
};

export default Cities; 
