import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export const Carusel = ({ slides }) => {
  return (
    <>
      <div className=" overflow-hidden relative">
        <div className="flex">
          {slides.map((s) => {
            return <img className="w-[150%]" src={s} />;
          })}
        </div>
      </div>
     <div>
          
     </div>
    </>
  );
};
