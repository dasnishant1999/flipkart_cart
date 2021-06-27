import React from "react";
import productsData from "../data/productsData.json";
import Product from "./Product";
import "../components/Products.css";

function Products() {
  return (
    <div className="products">
      {productsData.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
