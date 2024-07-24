/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Logo from "../assets/letter-s-leaf-logo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "react-use-cart";

function Navbar() {
  const [menuItems, setMenuItems] = useState(false);
  const { items } = useCart();

  const onMenuClick = () => {
    setMenuItems(!menuItems);
  };
  return (
    <div className="nav">
      <div className="left" id={menuItems ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <ShoppingCartIcon />
          <span className="badge" id="lblCartCount">
            {items.length}
          </span>
        </Link>
        <button onClick={onMenuClick}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
