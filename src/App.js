
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './files/Home';
import Services from './files/Services';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import FlashSales from './files/FlashSales';
import Aboutus from './files/Aboutus';

function App() {
  

 
  return (
   <BrowserRouter>
    <Routes>
      <Route index  element={<Home />}/>
      <Route path="/services" element={<Services />} />
      <Route path="/flashsale" element={<FlashSales />}/>
      <Route path="/aboutus" element={<Aboutus />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
