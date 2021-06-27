import React from "react";
import "./Product.css";
import { db } from "../firebaseConfig";

function Product({ product }) {
  function addToCart() {
    db.collection("cart")
      .doc(String(product.id))
      .set({ ...product, quantity: 1 })
      .then(() => console.log("product added to cart"));
  }

  return (
    <div className="product">
      <img src={product.imageUrl} alt="" />
      <div className="product-details">
        <p>{product.name}</p>
        <div className="price">
          <strong>
            RS. {product.price},(-{product.discount}% on price)
          </strong>
          <button className="cart-btn" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
