import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Calculation from './pages/Calculation';
import Quote from './pages/Quote';
import Header from './components/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/Calculator" element={<Calculation />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
