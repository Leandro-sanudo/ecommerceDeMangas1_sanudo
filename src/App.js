import Navbar from "./components/Navbar/Navbar";
import './App.css';
import React from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "../src/Context/CartContext"
import {Cart} from "./components/Cart/Cart"

function App () {

  const dash = "Todo lo que buscas en su solo lugar";

  return (
    <>
      <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={dash}/>}/>
          <Route path="/categoria/:category" element={<ItemListContainer greeting={dash}/>}/>
          <Route path="/detalles/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </CustomProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
