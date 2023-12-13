import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/Main';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <MainRouter/>
    </BrowserRouter>
   
  </React.StrictMode>
);

