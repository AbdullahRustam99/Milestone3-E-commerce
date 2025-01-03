"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BiHeart, BiShow } from "react-icons/bi";
import Card from "@/components/Card";
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = "https://fakestoreapi.com/products";
        const data = await fetch(api);
        const storeData = await data.json();
        setProducts(storeData);
      } catch (error) {
        console.log("faild to load data", error);
      }
    };
    fetchData();
  }, []);
   if (!products)
     return (
       <div className="text-center w-full h-full flex justify-center items-center">
         <p className="text-4xl text-[#DB4444]">Loading...</p>
       </div>
     );
  return (
    <div>
      <Header />
      <div className="max-w-[1440px] w-[100%] justify-center flex overflow-hidden px-5 py-7 lg:py-20 md:py-10 md:px-10 lg:px-20 ">
        <div>
          <div className="flex  items-center gap-5 mb-[19px]">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="font-semibold text-3xl  text-[#DB4444] ">
              Explore Our Products
            </p>
          </div>
          <div className="flex gap-3 pb-5">
            <div className="flex  justify-center items-center gap-2"></div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-5 justify-center items-center gap-5 pb-20">
              {products.map((e) => {
                return (
                  <a key={e.id} href={`/products/${e.id}`}>
                    <Card
                      icon2={
                        <BiShow
                          size={37}
                          className="bg-white rounded-[50%] mb-1 p-2 "
                        />
                      }
                      icon1={
                        <BiHeart
                          className="bg-white rounded-[50%] mb-1 p-2  "
                          size={35}
                        />
                      }
                      img={e.image}
                      itemName={e.title}
                      itemdisPries={e.price}
                      item={e.rating.count}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
