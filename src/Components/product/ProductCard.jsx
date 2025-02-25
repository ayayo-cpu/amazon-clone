import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormatter/CurrencyFormatter";
import styles from "./product.module.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { product, flex, renderDesc } = props;
  const flexClass = flex ? styles.product__flexed : "";
  const { image, title, id, rating, price, description } = product;
  // console.log("kun waan gama dhufa jiru", description);
  return (
    <div key={id} className={`${styles.card__container} ${flexClass}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <p style={{ maxWidth: "500px" }}>{description}</p>}
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
