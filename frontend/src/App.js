import './App.css';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import City from './routes/City';
import Cities from './routes/Cities';
import SignIn from './routes/SignIn';
import User from './routes/User';
import Continent from './routes/Continent';

import SignUp from './routes/SignUp';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { actionTypes } from './core/context/reducer';
import { useStateValue } from './core/context/StateProvider';







function App() {

  const [{ cities, user}, dispatch] = useStateValue()


  useEffect(() => {
    axios.get("https://mytinerary-marianela.herokuapp.com/api/datos")
      .then(response => {
        dispatch({
          type: actionTypes.CITIESDB,
          cities: response.data.response.cities
        })
      })

      if (localStorage.getItem("token")!==null) {

        const token= localStorage.getItem("token")
          
          axios.get("https://mytinerary-marianela.herokuapp.com/api/signInToken",{
          headers:{
            'Authorization':'Bearer '+token
          }
        })
        
          .then(user=> { 
        if (user.data.success) {

          dispatch({
            type:actionTypes.USER,
            user:user.data
          })
          
        }else {
          localStorage.removeItem("token")
        }
        //console.log(user)
      })
      }


     

  }, [])


  //console.log(cities)



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city/:id" element={<City />} />
          <Route path="continent" element={<Continent />} />

          {!user?
          <Route path="signin" element={<SignIn />} />
          :
          <Route path="signin" element={<User/>} />
          }
          <Route path="signup" element={<SignUp />} />



        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
