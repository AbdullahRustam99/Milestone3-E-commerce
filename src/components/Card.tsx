import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ReactNode } from "react";
import { BiSolidStar } from "react-icons/bi";
interface PropsType {
  itemName: string;
  itemdisPries: number | string;
  img: string | StaticImport;
  icon1: ReactNode;
  icon2: ReactNode;
  item: number | string;
  color?: string;
  discount?: string;
  itemPries?: string;
}

const Card = (props: PropsType) => {
  return (
    <>
      <div className="max-w-[1440px] ">
        <div className="w-[270px] h-[280px] p-2 bg-[#F5F5F5] rounded-sm max-md:basis-1/2 ">
          <div className="flex justify-between">
            <div>
              <span>{props.icon1}</span>
              <span>{props.icon2}</span>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Image src={props.img} alt="item pic" width={120} height={120} />
          </div>
        </div>
        <div className="w-[200px] h-[120px]">
          <h1 className="font-medium h-12 my-2  overflow-hidden">
            {props.itemName}
          </h1>
          <div className="flex gap-2 items-center">
            <p className="text-red-700">
              <span className="text-black font-semibold text-[17px]">
                Price:
              </span>{" "}
              {props.itemdisPries}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <BiSolidStar className="text-yellow-300" />
              <BiSolidStar className="text-yellow-300" />
              <BiSolidStar className="text-yellow-300" />
              <BiSolidStar className="text-yellow-300" />
              <BiSolidStar className="text-yellow-300" />
            </div>
            <p>({props.item})</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
