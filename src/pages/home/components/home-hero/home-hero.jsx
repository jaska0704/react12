import React from "react";
import img from "../../../../assets/home-img/MaskGroup.png";
import img1 from "../../../../assets/home-img/placeholder.png";
import img2 from "../../../../assets/home-img/placeholder1.png";
import img3 from "../../../../assets/home-img/placeholder2.png";
import { ButtonHome } from "../button-home";

export const HomeHero = () => {
  return (
    <>
      <div className="flex justify-between gap-3 w-[100%] max-w-[1300px] mx-auto py-10">
        <div className="flex justify-between w-full max-w-[1000px] bg-[#EEF4FF] rounded-lg align-bottom">
          <div>
            <h3 className="font-bold text-2xl mt-6 ml-9">Кўп ўқилаётганлар</h3>
            <img className=" pt-[50px]" src={img} alt="" />
          </div>
          <div>
            <div className="carousel carousel-center max-w-lg p-3 space-x-2  rounded-box w-full mx-auto mr-9">
              <div
                id="item1"
                className="carousel-item w-1/3 flex flex-col text-center"
              >
                <img src={img1} className="rounded-box h-[270px]" />
                <p>1984</p>
              </div>
              <div className="carousel-item w-1/3 flex flex-col text-center">
                <img src={img2} className="rounded-box h-[270px]" />
                <p>Code 8</p>
              </div>
              <div className="carousel-item w-1/3 flex flex-col text-center">
                <img src={img3} className="rounded-box h-[270px]" />
                <p>Rich dad poor dad</p>{" "}
              </div>
              <div className="carousel-item w-1/3 flex flex-col text-center">
                <img src={img1} className="rounded-box h-[270px]" />
                <p>1984</p>
              </div>
              <div className="carousel-item w-1/3 flex flex-col text-center">
                <img src={img2} className="rounded-box h-[270px]" />
                <p>Code 8</p>
              </div>
              <div
                id="item2"
                className="carousel-item w-1/3 flex flex-col text-center"
              >
                <img src={img3} className="rounded-box h-[270px]" />
                <p>Rich dad poor dad</p>
              </div>
              <div className="carousel-item w-1/3 flex flex-col text-center">
                <img src={img1} className="rounded-box h-[270px]" />
                <p>1984</p>
              </div>
              <div className="carousel-item w-1/3 flex flex-col text-center">
                <img src={img2} className="rounded-box h-[270px]" />
                <p>Code 8</p>
              </div>
              <div
                id="item3"
                className="carousel-item w-1/3 flex flex-col text-center"
              >
                <img src={img3} className="rounded-box h-[270px]" />
                <p>Rich dad poor dad</p>
              </div>
            </div>
            <div className="flex justify-start w-[10%] gap-2">
              <a href="#item1" className="btn btn-xs bg-lime-200">
                1
              </a>
              <a href="#item2" className="btn btn-xs bg-lime-200">
                2
              </a>
              <a href="#item3" className="btn btn-xs bg-lime-200">
                3
              </a>
            </div>
          </div>
        </div>

        <div className=" max-w-[261px] w-full h-[350px] bg-[#3546A1] rounded-lg p-6">
          <h3 className=" text-2xl font-bold leading-8 text-left text-white mb-5">
            Китоб ўқишни ёқтирасизми?
          </h3>
          <p className=" font-normal text-lg leading-6 text-white">
            Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
          </p>
          <ButtonHome />
        </div>
      </div>
    </>
  );
};
