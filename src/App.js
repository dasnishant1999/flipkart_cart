import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import CartPage from "./components/CartPage";
import "./App.css";

function App() {
  const [showCart, setshowCart] = useState(false);

  return (
    <div className="app">
      <>
        <Header showCart={showCart} setshowCart={setshowCart} />
        {showCart ? <CartPage /> : <Products />}
      </>
    </div>
  );
}

export default App;
