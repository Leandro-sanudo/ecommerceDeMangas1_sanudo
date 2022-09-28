import Navbar from "./components/Navbar/Navbar";
import './App.css';
import React from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {

  const dash = "Todo lo que buscas en su solo lugar";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={dash}/>}/>
          <Route path="/categoria/:category" element={<ItemListContainer greeting={dash}/>}/>
          <Route path="/detalles/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
