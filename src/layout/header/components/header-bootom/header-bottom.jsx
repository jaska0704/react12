import React from "react";
import { Link } from "react-router-dom";

export const HeaderBottom = () => {
  return (
    <div className="border-t-2 border-b-2 py-2">
      <ul className="flex gap-6 max-w-7xl mx-auto font-semibold text-base leading-7 text-[#3F51B5]">
        <li>
          <Link to="/auidokitob">Аудиокитоб</Link>
        </li>
        <li>
          <Link to="/elektron">Электрон китоблар</Link>
        </li>
        <li>
          <Link to="/bosmaKitob">Босма китоблар</Link>
        </li>
        <li>
          <Link to="/kontact">Контакт</Link>
        </li>
        <li>
          <Link to="/bizHaqimizda">Биз хақимизда</Link>
        </li>
      </ul>
    </div>
  );
};
