import logo from './among-us.png';
import './App.css';
import productdata from './components/productdata.js'
import {Products} from './components/products'
import {useState} from 'react';


function App() {
  const [products,SetProducts]=useState(productdata)
  console.log(products)
  return (
    <div className="App">
      <Products products={products}/>
    </div>
  );
}

export default App;
