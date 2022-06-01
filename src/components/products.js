import {useState} from 'react';

const Product = ({productdata,addProduct}) => {
    const [showProduct, setShowProduct] =useState(false);

    return (
        
        <div className="products">
            
             <img className="product" src ={productdata.img} alt="img"/>
            <p>Nimi:{productdata.name}</p>
            <p>Hinta:{productdata.hinta}€</p>
            <p>{productdata.kpl} kpl</p> 
            <button className="productbutton" onClick = {()=>setShowProduct(!showProduct)}><p>Kuvaus</p></button>
            {showProduct &&
            <p>{productdata.kuvaus}</p>        
           
}
<button className="buyButton"onClick={e=>addProduct(productdata.id)}><p>Osta</p></button>



        </div>
    


    )
}
const Products =({products,setProducts}) =>{
    const addProduct = id => {
        const tempProducts = products.map(p => {
            if(id === p.id)
                p = {...p, kpl: p.kpl + 1}
            return p
        })
        setProducts(tempProducts)
      }
      
      
    return (
        <div className="container">

           {products.map(pr=> <Product key={pr.id} productdata={pr} addProduct={addProduct}/>)}
           
            </div>
    )

}
export  {Product,Products};