import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/product/productCard";
import { useEffect } from "react";
import { producturl } from "../../Api/enpPoints";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => {
        // console.log("jalqabaa", res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("kuno kana", product);
  return <Layout>{<ProductCard product={product} />}</Layout>; //product
}

export default ProductDetail;
