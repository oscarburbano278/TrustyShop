import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import IngresoDatos from './pages/ingresoDatos/ingresoDatos.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IngresoDatos" element={<IngresoDatos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
