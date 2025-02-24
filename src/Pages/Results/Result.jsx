import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/enpPoints";
import ProductCard from "../../Components/product/productCard";
import styles from "./Result.module.css";
function Result() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(`${producturl}/products/category/${categoryName}`);
        console.log(res);

        console.log(res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(results);
  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results </h1>
        <p style={{ padding: "30px" }}>Category </p>
        <div className={styles.products__container}>
          {results.map((result, index) => {
            return <ProductCard key={result.id} product={result} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Result;
