import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../data/ProductsData";
import "../styles/ProductDetail.css";
import { useCart } from "react-use-cart";

function ProductDetail() {
  const { items, addItem } = useCart();
  const { id } = useParams();
  const productDetail = ProductData.find((x) => x.id === id);
  let quantity = 0;

  return (
    <div className="detail">
      <div
        className="left"
        style={{ backgroundImage: `url(${productDetail.image})` }}
      ></div>
      <div className="right">
        <h1>{productDetail.name}</h1>
        <p>{productDetail.description}</p>
        <h3>{productDetail.size}</h3>
        <h2>Rs. {productDetail.price}</h2>
        <button
          name="Add to cart"
          className="addToCartbtn"
          onClick={() => addItem(productDetail, quantity + 1)}
        >
          Quick add
        </button>
        <p>
          Quantity (
          {items.find((x) => x.id === id)?.quantity
            ? items.find((x) => x.id === id)?.quantity
            : 0}
          )
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
