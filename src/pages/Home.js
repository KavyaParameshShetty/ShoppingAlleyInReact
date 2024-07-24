import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/letter-s-leaf-logo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Img})` }}>
      <div className="homeContainer">
        <h1>Shopping Alley</h1>
        <p>One stop alley for all products</p>
        <Link to="/products">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
