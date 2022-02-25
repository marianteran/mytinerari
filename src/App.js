import './App.css';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import City from './routes/City';
import Cities from './routes/Cities';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
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

     

  }, [])


  console.log(cities)



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city/:id" element={<City />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
