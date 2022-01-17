import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import City from './routes/City';
import Cities from './routes/Cities';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
