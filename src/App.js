import Navbar from "./components/Navbar";
import './App.css';
import React from 'react';
import ItemListContainer from "./components/ItemListContainer";

function App () {

  const dash = "Todo lo que buscas en su solo lugar";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
    </>
  );
}

export default App;
