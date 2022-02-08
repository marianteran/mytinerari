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
import React from "react";




function App() {

  const data=[]
 
   axios.get("http://localhost:4000/api/datos")
    .then(response=> data.push(...response.data.response.cities))
  
  console.log(data)
  
 
  return (
    <div className="App">
          <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home data={data}/>} />
          <Route path="cities" element={<Cities data={data}/>} />
          <Route path="city" element={<City data={data} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
