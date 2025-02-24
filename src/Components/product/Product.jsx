import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import styles from "./product.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(products);
  return (
    <div className={styles.products__container}>
      {products.map((singleprodct, index) => {
        return <ProductCard product={singleprodct} key={index} />;
      })}
    </div>
  );
}

export default Product;
