"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/cartContext/createContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MdOutlineDeleteForever } from "react-icons/md";
import Button from "@/components/Button";
type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};
const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc: number, item: { price: number; quantity: number }) =>
        Math.round(acc + item.price * item.quantity),
      0
    );
    setSum(total);
  }, [cart]);
  return (
    <>
      <Header />
      <div className="px-2 md:grid md:grid-cols-2 md:p-5 max-w-[1400px]">
        <ul className="flex flex-col gap-4  items-center md:border-r-4">
          {cart.map((e: CartItem, index: number) => {
            return (
              <li
                key={index}
                className="flex flex-col md:flex-row border-2 items-start rounded-md border-black py-4 order-2 px-4  gap-5 "
              >
                <Image
                  src={e.image}
                  alt="product image"
                  width={90}
                  height={90}
                />

                <div className="flex flex-col">
                  <p className=" w-[250px] h-[50px] overflow-hidden font-bold">
                    {e.title}
                  </p>
                  <p className="font-medium pr-1">Quantity: {e.quantity}</p>
                  <p className="font-medium ">${e.price}</p>
                </div>
                <button onClick={() => removeFromCart(e.id)}>
                  <MdOutlineDeleteForever size={35} />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center">
          <div className="flex flex-col w-[300px] p-3 gap-3   ">
            <div className="flex justify-between border-b-2 border-[#252525]">
              <p className="text-[18px] font-medium">Cart Total</p>
              <p>$ {sum}</p>
            </div>
            <div className="flex justify-between  border-b-2 border-[#252525]">
              <p className="text-[18px] font-medium">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between  border-b-2 border-[#252525]">
              <p className="text-[18px] font-medium">Total</p>
              <p>$ {sum}</p>
            </div>
            <div className="flex justify-center">
              <Button text=" CheckOut" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
