import React from "react";
import "./rukn-select.css";
import img1 from "../../../../assets/header-img/ruknga-oid.svg";

export const RuknSelect = () => {
  return (
    <div className=" relative">
      <select className=" border border-[#E1E1E1] rounded-l-lg w-[180px] max-w-xs pl-14 h-11 font-semibold text-base leading-7 text-[#3F51B5]">
        <option disabled selected>
          Рукнлар
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <img className=" absolute top-3 left-4" src={img1} alt="" />
    </div>
  );
};
