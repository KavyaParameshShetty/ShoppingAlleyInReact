import React, { useState } from "react";
import ProductCart from "../components/ProductCart";
import { useCart } from "react-use-cart";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartTotal,
    isEmpty,
    items,
    totalItems,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [total] = useState(items);
  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
  return (
    <div className="cartList">
      <div className="productCartList">
        <table>
          <tbody>
            <tr>
              <td>
                {items.map((product, key) => {
                  return (
                    <div className="container">
                      <ProductCart
                        key={key}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                      />
                      <span className="buttons">
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(product.id)}
                        >
                          Remove Item
                        </button>
                      </span>
                    </div>
                  );
                })}
              </td>
              <td>
                <div className="total">
                  <h4>Cart ({totalUniqueItems})</h4>
                  <h4>total Items: ({totalItems})</h4>
                  <hr></hr>
                  <h2>Total ${cartTotal}</h2>
                  <Link to={"/orderPlaced"}>
                    <button onClick={() => emptyCart()}>Buy Now</button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
