import React from "react";


import Button from "@mui/material/Button";
import InformationCity from "../components/InformationCity";
import Comentario from "../components/Comentario";
import Slider from "../components/Slider";

export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities:props.data
           
        }
        console.log(props)
    }

    render() {
        return (
            <>
                <main className="city">

                    <InformationCity cities={this.state.cities}  />
                   
                    <Comentario />

                    <div className="mt-5 mb-5">
                        <div className="container mt-5 mb-0">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="titlepage text-center ">
                                        <h2>
                                            <Button variant="contained" href="/cities" size="large">
                                                More City
                                            </Button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Slider cities={this.state.cities}   />
                    </div>
                </main>
            </>
        );
    }
}
