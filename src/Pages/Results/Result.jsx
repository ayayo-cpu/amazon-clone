import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/enpPoints";
import styles from "./Result.module.css";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/Product/ProductCard";
function Result() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(results);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 style={{ padding: "30px" }}>Results </h1>
          <p style={{ padding: "30px", textTransform: "uppercase" }}>
            {categoryName}
          </p>
          <div className={styles.products__container}>
            {results.map((result, index) => {
              return (
                <ProductCard
                  key={result.id}
                  product={result}
                  renderAdd={true}
                />
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Result;
