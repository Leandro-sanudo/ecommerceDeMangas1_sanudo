import Navbar from "./components/Navbar/Navbar";
import './App.css';
import React from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";

function App () {

  const dash = "Todo lo que buscas en su solo lugar";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
      <ItemCount />
    </>
  );
}

export default App;
