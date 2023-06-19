import React from "react";
 
const Product=(props)=>{
    const {image,title,price}=props;
    return(
        <div className="product-card">
      <img src={image} alt="Product Image" className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>

    )
    
}
export default Product;