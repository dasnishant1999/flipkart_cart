import React from "react";
import "../components/Header.css";

function Header({ setshowCart }) {
  return (
    <div className="header">
      <div className="header-elements">
        <strong onClick={() => setshowCart(false)}>E-Comm</strong>
        <button className="mycart-btn" onClick={() => setshowCart(true)}>
          My Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
