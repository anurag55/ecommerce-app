import React from "react";

import Navbar from "../Navbar";
import Header from "./Header";
import CarouselComponent from "./Carousel";
import Recommended from "../Recommended";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <CarouselComponent />
      <Recommended />
    </div>
  )
}