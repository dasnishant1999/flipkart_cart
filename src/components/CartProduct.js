import React from "react";
import "../components/CartPage.css";
import { db } from "../firebaseConfig";

function CartProduct({ product }) {
  let discount = product.quantity * ((product.price * product.discount) / 100);
  let actualPrice = product.quantity * product.price - discount;

  function removeProductFromCart(id) {
    console.log(id.toString());
    db.collection("cart").doc(id.toString()).delete();
  }

  function saveForLater(id) {
    db.collection("later")
      .doc(id.toString())
      .set({ ...product });
    db.collection("cart").doc(id.toString()).delete();
  }

  function increment(id) {
    db.collection("cart")
      .doc(id.toString())
      .update({ quantity: product.quantity + 1 });
  }

  function decrement(id) {
    if (product.quantity != 1) {
      db.collection("cart")
        .doc(id.toString())
        .update({ quantity: product.quantity - 1 });
    }
  }

  return (
    <div className="cart-product">
      <div className="image">
        <img src={product.imageUrl} alt="" />
        <div>
          {" "}
          <button onClick={() => decrement(product.id)}>-</button>
          {product.quantity}
          <button onClick={() => increment(product.id)}>+</button>{" "}
        </div>
      </div>
      <div className="cart-product-details">
        <p>
          {product.name},<i>{product.brand}</i>
        </p>
        <strong>
          Rs. {actualPrice} (discount of {product.discount}% included)
        </strong>
        <div className="buttons">
          <button onClick={() => saveForLater(product.id)}>
            Save for later
          </button>
          <button onClick={() => removeProductFromCart(product.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
