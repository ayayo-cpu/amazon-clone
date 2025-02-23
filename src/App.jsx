import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import LowerHeader from "./Components/Header/LowerHeader";
import CarouselEffect from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category";
import Product from "./Components/product/product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
