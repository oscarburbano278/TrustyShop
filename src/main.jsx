import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
// import Home from './pages/home/Home.jsx';
// import IngresoDatos from './pages/ingresoDatos/ingresoDatos.jsx';
// import DinerApp from './pages/obtDineroApp/dinerApp.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
