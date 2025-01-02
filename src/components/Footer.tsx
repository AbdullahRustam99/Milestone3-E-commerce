import Image from "next/image";
import React from "react";
import {
  BiCopyright,
  BiSend,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
	BiLogoLinkedin,
  
} from "react-icons/bi";
import Qr from "@/public/img/Frame 719.png";

const footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white h-[] max-w-[1440px]">
        <div className=" px-20 py-20 justify-center gap-20 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-bold text-[24px]">Exclusive</h1>
              <p className="font-medium text-[20px]">Subscribe</p>{" "}
              <p className=" text-[14px]">Get 10% off your first order</p>
            </div>
            <div className="flex justify-center items-center py-[12px] pl-[16px]  border-2 rounded-md ">
              <input
                placeholder="Enter your email"
                className=" bg-transparent w-32 placeholder:text-[14px] focus:border-none focus:outline-none "
              />
              <span>
                <BiSend size={25} className="cursor-pointer" />
              </span>
            </div>
          </div>
          <div>
            <p className="font-medium text-[20px] pb-7">Support</p>
            <ul className="flex flex-col gap-3 font-normal text-[16px]">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
              <li></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[20px] pb-7">Account</p>
            <ul className="flex flex-col gap-3 font-normal text-[16px]">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[20px] pb-7">Quick Link</p>
            <ul className="flex flex-col gap-3 font-normal text-[16px]">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[20px] pb-7">Download App</p>
            <div>
              <p className="text-[12px]">Save $3 with App New User Only</p>
              <Image src={Qr} alt={"download link"} />
            </div>
            <div className="flex gap-4 pt-5 cursor-pointer">
              <BiLogoFacebook size={20} />
              <BiLogoInstagram size={20} />
              <BiLogoTwitter size={20} />
              <BiLogoLinkedin size={20} />
            </div>
          </div>
        </div>
        <div className="text-center border-t-2 border-[#ffffff73] text-[#ffffff73] pt-2 pb-4">
          <p className="text-[16px] flex justify-center items-center ">
            <span>
              <BiCopyright />
            </span>
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default footer;
