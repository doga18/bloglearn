import './App.css';

// importando os hook para usar o react-router-dom

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages para colocar nas rotas.
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";

// Importando componentes, para ir montando nosso site.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="container">        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
