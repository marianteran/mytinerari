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
import { useEffect } from 'react';




function App() {
  
  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
    .then(response=> console.log(response))
  });

  return (
    <div className="App">
          <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city" element={<City />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
