import React from "react";

const Button = (props: { text: string }) => {
  return (
    <div className="py-[16px] rounded px-[48px] text-center font-semibold bg-[#DB4444] w-[234px] text-white">
      {props.text}
    </div>
  );
};

export default Button;
