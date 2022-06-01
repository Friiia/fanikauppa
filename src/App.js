import logo from './among-us.png';
import './App.css';
import productdata from './components/productdata.js'
import {Products} from './components/products'
import {useState} from 'react';
import {Shoppingcart} from './components/shoppingcart'


function App() {
  const [products,setProducts]=useState(productdata)
  console.log(products)
  return (
    <div>
    <div className="App">
       <h3>Tuotteet</h3>
      <Products products={products} setProducts={setProducts}/>
    </div>
    <Shoppingcart products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
