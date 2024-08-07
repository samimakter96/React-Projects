import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';


const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const productCount = cartItems[id]

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {productCount > 0 && <>({productCount})</>}
      </button>
    </div>
  );
};

export default Product;
