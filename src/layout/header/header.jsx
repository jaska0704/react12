import React from "react";
import { RuknSelect } from "./components/rukn-select";
import { Search } from "./components/search";
import { LangSelect } from "./components/lang-select/lang-select";
import { Button } from "./components/button-header";
import "./header.css";
import logo from "../../assets/header-img/Logo.svg";
import img from "../../assets/header-img/search.svg";
import { Link } from "react-router-dom";
import { HeaderBottom } from "./components/header-bootom";

export const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center max-w-7xl mx-auto py-7">
        <div>
          <Link className=" inline-block" to="/">
            <img src={logo} alt="logo-icon" />
          </Link>
        </div>
        <div className=" flex">
          <RuknSelect />
          <Search />
          <button className="bg-[#F8F8F8] w-[55px] border border-[#E1E1E1] rounded-r-lg flex justify-center items-center">
            <img src={img} alt="icon" />
          </button>
        </div>
        <LangSelect />
        <Button />
      </div>
      <div>
        <HeaderBottom/>
      </div>
    </>
  );
};
