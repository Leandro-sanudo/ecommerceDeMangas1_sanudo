import Navbar from "./components/Navbar/Navbar";
import './App.css';
import React from 'react';
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App () {

  const dash = "Todo lo que buscas en su solo lugar";

  return (
    <>
      <Navbar />
      <ItemDetailContainer />
    </>
  );
}

export default App;
