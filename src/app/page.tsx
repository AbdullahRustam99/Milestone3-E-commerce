import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mains from "@/components/Mains";
import Catagories from "@/components/Catagories";
import Todays from "@/components/Todays";
import Products from "@/components/Products";
import Newarivals from "@/components/Newarivals";
const Main = () => {
  return (
    <div>
      <Header />
      <Mains />
      <Todays />
      <Catagories />
      <Products />
      <Newarivals />
      <Footer />
    </div>
  );
};

export default Main;
