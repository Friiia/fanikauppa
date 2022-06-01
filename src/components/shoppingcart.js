const Shoppingcart=({products})=>{
    return(
        <div className="shoppingcart">
            <h3>Ostoskori</h3>
       {
products
        .filter(product=>product.kpl>0)
        .filter(product=>product.hinta)
        .map(product=>
           <div key={product.id}>
                    <p>Tuote: {product.name}</p>
                    <p>Kpl:{product.kpl}</p>
                    <p>Hinta:{product.hinta}</p>

        </div>
           )}
           </div>
           
    )


}
export {Shoppingcart}