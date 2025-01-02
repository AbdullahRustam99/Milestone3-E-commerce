"use client";
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext(undefined);

const CartProvider = ({ children }) => {
  const [cart, setcart] = useState(() => {
    const savedData = localStorage.getItem("cart");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
 
  const addToCart = (product, quantity) => {
    //     console.log("Adding to cart", product, quantity);
    setcart((cartitem) => {
      const itemExist = cartitem.find((item) => item.id === product.id);
      console.log(itemExist);
      if (itemExist) {
        return cartitem.map((item) => {
          if (item.id === product.id) {
            console.log("id", item.id, product.id);
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        });
      }

      return [...cartitem, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setcart((cartItem) => {
      return cartItem.filter((item) => item.id !== productId);
    });
  };
  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </cartContext.Provider>
    </>
  );
};

export const useCart = () => {
  const context = useContext(cartContext);
  //   console.log("context", context);
  return context;
};
export default CartProvider;
