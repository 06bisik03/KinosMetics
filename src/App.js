import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './files/Home';
import Services from './files/Services';
import FlashSales from './files/FlashSales';
import Aboutus from './files/Aboutus';
import Products from "./files/Products";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index  element={<Home />}/>
      <Route path="/services" element={<Services />} />
      <Route path="/flashsale" element={<FlashSales />}/>
      <Route path="/aboutus" element={<Aboutus />}/>\
      <Route path="/products/:type" element={<Products />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
