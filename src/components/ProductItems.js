import React from "react";

function ProductItems({ name, price, image }) {
  return (
    <div className="item">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>Rs. {price}</p>
    </div>
  );
}

export default ProductItems;
