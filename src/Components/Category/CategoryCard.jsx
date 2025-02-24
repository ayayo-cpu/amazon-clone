import React from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard(data, key) {
  return (
    <div className={styles.category} key={key}>
      <Link to={`/category/${data.data.name}`}>
        <span>
          <h2>{data.data.title}</h2>
        </span>
        <img src={data.data.img} alt="" />
        <p>Shop Now!</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
