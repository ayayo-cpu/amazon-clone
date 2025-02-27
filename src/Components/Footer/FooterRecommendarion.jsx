import React from "react";
import styles from "./Footer.module.css";
function FooterRecommendarion() {
  return (
    <section className={styles.footerRecommendarion}>
      <div className={styles.reco}>
        <h1>See personalized recommendations</h1>
        <button>Sign in</button>
        <p>
          New Customer? <a href="">stay here</a>
        </p>
      </div>
      <div className={styles.bactToTop}>
        <p>Back to top</p>
      </div>
    </section>
  );
}

export default FooterRecommendarion;
