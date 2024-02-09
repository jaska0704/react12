import React from "react";
import heart from "../../../../assets/home-img/heart.svg";

export const ButtonHome = () => {
  return (
    <button className="btn rounded-2xl btn-info bg-white w-[100%] mt-20 text-black">
      <img src={heart} alt="icon_heart" /> Обуна бўлиш
    </button>
  );
};
