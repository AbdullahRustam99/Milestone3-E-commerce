import React from "react";
import { BiHeart, BiCart, BiSearch, BiChevronDown } from "react-icons/bi";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full p-2 text-center text-[14px] bg-black text-white max-w-[1440px]">
        <div className="flex items-center justify-center md:gap-40">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-semibold underline text-[16px] pl-5 cursor-pointer">
              ShopNow
            </span>
          </p>

          <p className="flex items-center">
            English
            <span className="">
              <BiChevronDown size={25} />
            </span>
          </p>
        </div>
      </div>
      <header className="w-full border-b-2 pt-[23px] pb-[15px]  max-w-[1440px] ">
        <div className="flex justify-evenly md:justify-center items-center  md:gap-36">
          <nav className=" flex justify-center items-center gap-28 ">
            <h1 className="font-bold text-[24px]">Exclusive</h1>
            <ul className=" flex justify-center items-center text-[16px] gap-9 max-md:hidden max-lg:hidden">
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                 <Link href={"/products"}>Product</Link>
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                Contact
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                About
              </li>
              <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                Sing Up
              </li>
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger className="  lg:hidden">
              <IoIosMenu size={20} />
            </SheetTrigger>
            <SheetContent>
              <ul className=" flex flex-col justify-end items-center text-[16px] gap-7 ">
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Home
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                   <Link href={"/products"}>Product</Link>
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Contact
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  About
                </li>
                <li className="hover:border-b-2 cursor-pointer border-[#a5a5a5] ">
                  Sing Up
                </li>

                <li>
                  <div className="flex justify-center items-center ">
                    <input
                      placeholder="What you are looking for?"
                      className="bg-[#F5F5F5] pr-0 pl-2 py-2 rounded-tl-md rounded-bl-md placeholder:text-[14px]"
                    />
                    <span className="cursor-pointer bg-[#F5F5F5] py-2 pr-2 pl-0 rounded-tr-md rounded-br-md ">
                      <BiSearch size={22} />
                    </span>
                  </div>
                </li>
                <li className="flex ">
                  <BiHeart size={24} className="cursor-pointer" />
                  <Link href={"/cart"}>
                    <BiCart size={24} className="cursor-pointer" />
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
          <nav className=" flex justify-center items-center gap-6">
            <div className="md:flex justify-center items-center hidden">
              <input
                placeholder="What you are looking for?"
                className="bg-[#F5F5F5] px-3 py-2 rounded-tl-md rounded-bl-md placeholder:text-[14px]"
              />
              <span className="cursor-pointer bg-[#F5F5F5] py-2 px-3 rounded-tr-md rounded-br-md ">
                <BiSearch size={24} />
              </span>
            </div>
            <BiHeart size={24} className="cursor-pointer hidden md:block" />
            <Link href={"/cart"}>
              <BiCart size={24} className="cursor-pointer hidden md:block" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
