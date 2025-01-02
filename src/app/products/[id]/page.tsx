"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BiHeart } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import Image from "next/image";
import { useCart } from "@/app/cartContext/createContext";

const Main = ({ params }: { params: { id: string; }; }) => {
  const {addToCart} = useCart()
  const { id } = params;
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = `https://fakestoreapi.com/products/${id}`;
        const data = await fetch(api);
        const storeData = await data.json();
        console.log("Raw data", storeData);
        setproducts(storeData);
      } catch (error) {
        console.log("faild to load data", error);
      }
    };
    fetchData();
  }, [id]);
const [quantity, setquantity] = useState(0)

  return (
    <div>
      <Header />
      <div className="md:flex items-center px-5 py-5 md:px-20 md:py-10 gap-5">
        <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
        <p className="font-semibold text-3xl  text-[#DB4444] ">
          Products Details
        </p>
      </div>
      <div className="md:flex justify-center items-center px-4 gap-12 mb-10">
        <div className="flex justify-center">
          <Image
            src={products.image}
            alt="Product Image"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1 className="md:w-[500px] text-[24px] font-bold">
            {products.title}
          </h1>
          <p className="text-[24px] my-1">${products.price}</p>
          <p className="md:w-[500px] text-[14px]">{products.description}</p>
          <hr className="my-2 font-bold" />
          <div className="flex items-center gap-5">
            <div className="flex justify-center  items-center gap-2 md:gap-5 border-[1.5px] border-[#161616c5] font-medium text-center rounded-sm">
              <button
                onClick={() => {
                  setquantity(quantity - 1);
                }}
                className="border-r-[1.3px]  border-[#161616c5] text-[20px] px-2 "
              >
                -
              </button>{" "}
              {quantity}{" "}
              <button
                onClick={() => {
                  setquantity(quantity + 1);
                }}
                className="border-l-[1.3px]  border-[#161616c5]  text-[20px] px-2"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(products, quantity)}
              className="bg-[#DB4444] cursor-pointer px-5 py-1 text-white rounded-sm"
            >
              Buy Now
            </button>
            <BiHeart className="border-[1.5px] rounded-sm p-1" size={30} />
          </div>
          <div className="md:w-[330px] px-2 py-2 border-[1.5px] rounded-sm border-black my-3">
            <div className="flex gap-3 items-center border-b-[1.5px] border-black  pb-2">
              <TbTruckDelivery size={33} />
              <div>
                <h1>Free Delivery</h1>
                <p className="font-medium text-[12px] ">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <LuRefreshCcw size={33} />
              <div>
                <h1>Return Delivery</h1>
                <p className="font-medium text-[12px]">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
