import React from "react";
import CarouselEffect from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/product/product";
import Layout from "../../Components/Layout/Layout";

function Landing() {
  return (
    <div>
      <Layout>
        <CarouselEffect />
        <Category />
        <Product />
      </Layout>
    </div>
  );
}

export default Landing;
