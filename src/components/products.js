import {useState} from 'react';

const Product = ({productdata}) => {
    const [showProduct, setShowProduct] =useState(false);

    return (
        
        <div className="products">
            <div>
             <img className="product" src ={productdata.img} alt="img"/>
            <p>Nimi:{productdata.name}</p>
            <p>Hinta:{productdata.hinta}€</p>
            <button className="productbutton" onClick = {()=>setShowProduct(!showProduct)}><h3>Kuvaus</h3></button>
            {showProduct &&
            <p>{productdata.kuvaus}</p>
}


        </div>
        </div>


    )
}
const Products =({products}) =>{
    return (
        <div>
            <h3>Tuotteet</h3>
            <div className="container"/>
            Tuotteet: {products.map(pr=> <Product key={pr.id} productdata={pr}/>)}
        </div>

    )
}
export  {Product,Products};