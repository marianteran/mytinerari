import './App.css';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import City from './routes/City';
import Cities from './routes/Cities';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { actionTypes } from './core/context/reducer';
import { useStateValue } from './core/context/StateProvider';




function App() {

  const [{ cities}, dispatch] = useStateValue()


  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({
          type: actionTypes.CITIESDB,
          cities: response.data.response.cities
        })
      })

      axios.get("http://localhost:4000/api/itinerary")
      .then(response => {
        dispatch({
          type: actionTypes.ITINERARIESDB,
          itineraries: response.data.response.itinerary
        })
         
      })
      


  }, [])


  console.log(cities)
  // console.log(itineraries)


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city/:id" element={<City />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
