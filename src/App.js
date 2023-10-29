
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './files/Home';
import Services from './files/Services';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  

 
  return (
   <BrowserRouter>
    <Routes>
      <Route index  element={<Home />}/>
      <Route path="/services" element={<Services />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
