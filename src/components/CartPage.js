import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import "../components/CartPage.css";
import CartProduct from "./CartProduct";
import SaveForLater from "./SaveForLater";

function CartPage() {
  const [cartProducts, setcartProducts] = useState([]);
  let price = 0;
  let discountPrice = 0;

  useEffect(() => {
    function getCartProducts() {
      db.collection("cart").onSnapshot((quesrySnapshot) => {
        const cartItems = [];
        quesrySnapshot.forEach((doc) => {
          cartItems.push(doc);
        });
        setcartProducts(cartItems);
      });
    }

    getCartProducts();

    return () => {};
  }, []);

  return (
    <>
      <div className="cart-page">
        <h5>My Cart({cartProducts?.length})</h5>
        <hr />
        {cartProducts &&
          cartProducts.map((item) => {
            price =
              price +
              item.data().quantity *
                (item.data().price -
                  (item.data().price * item.data().discount) / 100);
            discountPrice =
              discountPrice +
              (item.data().quantity *
                (item.data().price * item.data().discount)) /
                100;
            return <CartProduct product={item.data()} key={item.id} />;
          })}
      </div>
      <h4>
        Total price: Rs.{price.toFixed(2)} (you saved: Rs.
        {discountPrice.toFixed(2)})
      </h4>
      <SaveForLater />
    </>
  );
}

export default CartPage;
