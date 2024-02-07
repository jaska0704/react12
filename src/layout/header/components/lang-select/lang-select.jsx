import React from "react";
import img1 from "../../../../assets/header-img/uz-bayroq.svg";

export const LangSelect = () => {
  return (
    <div className=" relative">
      <select className=" border-none rounded-xl select-info w-[140px] h-11 bg-[#EEF4FF] font-semibold text-base text-[#3F51B5] pl-10">
        <option disabled selected>
          Ўз
        </option>
        <option>English</option>
        <option>Japanese</option>
        <option>Italian</option>
      </select>
      <img className=" absolute top-3 left-2" src={img1} alt="" />
    </div>
  );
};
