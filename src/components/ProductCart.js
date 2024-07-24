import React from "react";
import { Link } from "react-router-dom";
import "../styles/CartProducts.css";

function ProductCart({ id, name, price, image, quantity }) {
  return (
    <div className="cart">
      <div className="img">
        <Link to={id}>
          <div style={{ backgroundImage: `url(${image})` }}></div>
        </Link>
      </div>
      <div className="content">
        <div>{name}</div>
        <div>Rs. {price}</div>
        <div>Quantity ({quantity})</div>
      </div>
    </div>
  );
}

export default ProductCart;
