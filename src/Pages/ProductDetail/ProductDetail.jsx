import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { producturl } from "../../Api/enpPoints";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => {
        // console.log("jalqabaa", res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log("kuno kana", product);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
