import React from "react";

export const RuknlarComp = ({ title, img, id }) => {
  return (
    <div id={id} className="carousel-item w-1/6 relative">
      <img className="" src={img} alt="" />
      <p className=" absolute top-28 z-1 text-white font-semibold text-lg pl-2">
        {title}
      </p>
    </div>
  );
};
