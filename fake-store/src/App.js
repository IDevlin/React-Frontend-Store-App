import './App.css';
import { useState } from 'react';
import Store from './components/Store';


function App() {
 const [storeItems, setStoreItem] = useState([
  {
   title: "Computer",
   price: 20,

  },
  {
    title: "CD Games ",
    price: 20,
    
   },
   {
    title: "KeyBoard",
    price: 50,
    
   }
])

  return (
    <>
    <Store items={storeItems} onItemAdd={(itemData)=> {
      console.log('Data', itemData)
    }} />
    </>
   
  );
}

export default App;
