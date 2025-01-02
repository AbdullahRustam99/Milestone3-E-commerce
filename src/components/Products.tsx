import React from "react";
import Card from "@/components/Card";
import { BiHeart, BiShow } from "react-icons/bi";
import camers from "@/public/img/camera.png";
import gameControler from "@/public/img/GP11_PRD3 1.png";
import car from "@/public/img/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import jacket from "@/public/img/jacket.png";
import ipad from "@/public/img/ideapad-gaming-3i-01-500x500 1.png";
import facewash from "@/public/img/facewash.png";
import dogfood from "@/public/img/dog food.png";
import boot from "@/public/img/Copa_Sense 1.png";
import Button from "@/components/Button";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] flex overflow-hidden px-20 ">
        <div>
          <div className="flex  items-center gap-5 mb-[19px]">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="font-semibold text-[#DB4444] ">Our Products</p>
          </div>
          <div className="flex gap-3 pb-5">
            <div className="">
              <p className="font-semibold text-3xl">Explore Our Products</p>
              <div className="flex "></div>
            </div>
            <div className="flex justify-center items-center gap-2"></div>
          </div>
          <div className=" overflow-hidden flex justify-center items-center flex-wrap gap-5 pb-20">
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
              img={ipad}
              itemName="ASUS FHD Gaming Laptop"
              itemdisPries="$720"
              item="88"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              color="w-12 h-6 text-center bg-[#00FF66] rounded-md text-white"
              discount="NEW"
              img={car}
              itemName="Kids Electric Car"
              itemdisPries="$960"
              item="75"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={boot}
              itemName="Jr. Zoom Soccer Cleats"
              itemdisPries="$1320"
              item="20"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={camers}
              itemName="CANON EOS DSLR Camera"
              itemdisPries="$390"
              item="99"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={facewash}
              itemName="Curology Product Set "
              itemdisPries="$590"
              item="99"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              color="w-12 h-6 text-center bg-[#00FF66] rounded-md text-white"
              discount="NEW"
              img={gameControler}
              itemName="GP11 Shooter USB Gamepad"
              itemdisPries="$690"
              item="99"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={jacket}
              itemName="Quilted Satin Jacket"
              itemdisPries="$890"
              item="99"
            />
            <Card
              icon2={
                <BiShow
                  size={37}
                  className="bg-white rounded-[50%] mb-1 p-2 "
                />
              }
              icon1={
                <BiHeart
                  className="bg-white rounded-[50%] mb-1 p-2 "
                  size={35}
                />
              }
              img={dogfood}
              itemName="Breed Dry Dog Food"
              itemdisPries="$3190"
              item="99"
            />
          </div>
        </div>
      </div>
      <div className="px-20 max-w-[1440px] ">
        <div className="w-[1140px] text-center flex items-center justify-center border-b-2 pb-7 mb-4 max-lg:w-[848px] max-md:w-[572px]">
          <Link href={"/products"}>
            <Button text="View All Products" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
