import React from "react";
import heart from "../../../../assets/home-img/heart.svg";

export const InfoHome = ({ title, text, img }) => {
  return (
    <div className="max-w-[1300px] mx-auto flex gap-3">
      <img src={img} alt="" className="p-3 h-[80%] bg-[#EEF4FF] rounded-xl" />
      <div>
        <h3 className=" text-base font-bold leading-5">{title}</h3>
        <p className=" text-xs font-normal leading-4 text-[#AAAAAA] max-w-[214px]">
          {text}
        </p>
      </div>
    </div>
  );
};
