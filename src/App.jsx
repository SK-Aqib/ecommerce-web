import React from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Collection from "./components/Collection/Collection";
import CartUI from "./Pages/CartUI";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return(
    <div>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Collection/>} />
          <Route path="/CartUI" element={<CartUI/>}/> 
        </Routes>
    </BrowserRouter>
    </div>
  )

}

export default App;