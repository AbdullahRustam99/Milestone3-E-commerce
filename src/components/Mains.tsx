import Image from "next/image";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import mic from "@/public/img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

const main = () => {
  return (
    <>
      <div className="max-w-[1440px]">
        <div className="w-full flex gap-10 py-12 px-20 justify-between ">
          <div className="border-r-2  pr-4 ">
            <ul className="flex flex-col gap-4">
              <li>
                <div className="flex items-center gap-10">
                  <p className="w-32">Womans Fashion</p>
                  <span>
                    <BiChevronRight size={20} />
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-10">
                  <p className="w-32">Mens Fashion</p>

                  <span>
                    <BiChevronRight size={20} />
                  </span>
                </div>
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Babys & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className=" max-w-[1440px] flex flex-wrap items-center justify-between bg-black text-white p-10  border-b-4 ">
            <div className="flex flex-col space-y-5 md:w-1/2 w-full mb-10 md:mb-0">
              <p className="text-button1 uppercase text-sm sm:text-base font-semibold font-poppins">
                Categories
              </p>
              <h1 className=" text-2xl sm:text-5xl font-semibold font-inter leading-tight">
                Enhance Your Music Experience
              </h1>
              <div className="flex items-center space-x-4 mt-4 sm:mt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">23</p>
                  <span>Hours</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">04</p>
                  <span>Days</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">45</p>
                  <span>Minutes</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">23</p>
                  <span>Secound</span>
                </div>
              </div>
              <a
                className="mt-6 py-3 px-6 bg-button1 text-white rounded text-base font-poppins bg-green-400 transition w-[150px] text-center"
                href="/shop"
              >
                buy now!
              </a>
            </div>
            <div className="md:w-1/2 w-full flex justify-center md:justify-end">
              <Image
                src={mic}
                alt="mic"
                className="--tw-drop-shadow: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
