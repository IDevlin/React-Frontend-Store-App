import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';
import Store from './components/Store';
import axios from 'axios';
import Product from "./components/Product";



function App() {
 const [storeItems, setStoreItem] = useState([]);
 const [loading, setLoading] = useState(true)

useEffect (()=> {
  axios.get('https://fakestoreapi.com/products')
  .then(({data}) => {
    setLoading(false)
    setStoreItem(data);
  });
}, []);

const StoreView = (props) => {
  return ( <>
        <Store loading={loading} storeItems={storeItems} onItemAdd={(itemData)=> {
          setStoreItem([...storeItems, itemData]);
         }} />
         </>
      )
}
console.log(StoreView())
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<StoreView />} />
       <Route path="/product/:id" element={<Product {...<StoreView/>}/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}


export default App;
