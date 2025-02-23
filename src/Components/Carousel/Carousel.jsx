import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./data";
import styles from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          return <img src={imageItemLink} key={index} />;
        })}
      </Carousel>
      <div className={styles.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
