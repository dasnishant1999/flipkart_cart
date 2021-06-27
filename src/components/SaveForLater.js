import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import "../components/CartPage.css";

function SaveForLater() {
  const [later, setlater] = useState([]);

  useEffect(() => {
    function getSavedProducts() {
      db.collection("later").onSnapshot((quesrySnapshot) => {
        const savedItems = [];
        quesrySnapshot.forEach((doc) => {
          savedItems.push(doc);
        });
        setlater(savedItems);
      });
    }

    getSavedProducts();
    return () => {};
  }, []);

  function removeProductFromCart(id) {
    console.log(id.toString());
    db.collection("later").doc(id.toString()).delete();
  }

  function moveToCart(product) {
    db.collection("cart")
      .doc(product.id.toString())
      .set({ ...product });
    db.collection("later").doc(product.id.toString()).delete();
  }

  function SavedProduct({ product }) {
    return (
      <div className="cart-product">
        <div className="image">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="cart-product-details">
          <p>
            {product.name},<i>{product.brand}</i>
          </p>
          <strong>Rs. {product.price}</strong>
          <div className="buttons">
            <button onClick={() => moveToCart(product)}>Move To Cart</button>
            <button onClick={() => removeProductFromCart(product.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div  className='cart-page'>
      <h5>Saved Items({later?.length})</h5>
      <hr />
      {later &&
        later.map((item) => {
          return <SavedProduct product={item.data()} key={item.id} />;
        })}
    </div>
  );
}

export default SaveForLater;
