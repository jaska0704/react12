import React from "react";
import img from "../../../../assets/footer-img/play-market.svg";
import img1 from "../../../../assets/footer-img/apple-istore.svg";
import { Link } from "react-router-dom";

export const FooterTop = () => {
  return (
    <div className="bg-[#EEF4FF] pt-12 pb-20">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <div>
          <h3 className=" font-bold text-xl leading-10">Платформа хақида</h3>
          <ul className=" font-normal text-lg leading-8">
            <li>Liber ўзи нима?</li>
            <li>Фойдаланиш шартлари</li>
            <li>Ёрдам</li>
          </ul>
        </div>
        <div>
          <h3 className=" font-bold text-xl leading-10">Обуна хақида</h3>
          <ul className=" font-normal text-lg leading-8">
            <li>Обуна бўлиш</li>
            <li>Қандай тўлаш</li>
          </ul>
        </div>
        <div>
          <h3 className=" font-bold text-xl leading-10">Китоблар</h3>
          <ul className=" font-normal text-lg leading-8">
            <li>Аудио китоблар</li>
            <li>Электрон китоблар</li>
            <li>Китоблар</li>
          </ul>
        </div>
        <div>
          <h3 className=" font-bold text-xl leading-10">Мобил илова</h3>
          <ul className=" font-normal text-lg leading-8">
            <li>
              <Link to="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
                <img src={img} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.apple.com/app-store/">
                <img src={img1} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
