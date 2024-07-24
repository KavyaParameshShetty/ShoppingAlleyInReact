import React from "react";
import { ProductData } from "../data/ProductsData";
import ProductItems from "../components/ProductItems";
import "../styles/Products.css";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <h1 className="productTitle">Our Products</h1>
      <div className="productList">
        {ProductData.map((product, key) => {
          return (
            <div>
              <Link to={`/productDetail/${product.id}`}>
                <ProductItems
                  key={key}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
