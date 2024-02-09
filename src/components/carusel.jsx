import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// export const Carusel = ({ slides }) => {
//   let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };
//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };

//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className={`flex transition ease-in-out duration-40 w-[1200px]`}
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((s) => {
//           return <img className="" src={s} />;
//         })}
//       </div>
//       <div className="absolute top-0 h-full w-full flex justify-between items-center">
//         <button onClick={previousSlide}>
//           <FaArrowCircleLeft></FaArrowCircleLeft>
//         </button>
//         <button onClick={nextSlide}>
//           <FaArrowCircleRight></FaArrowCircleRight>
//         </button>
//       </div>
//     </div>
//   );
// };
