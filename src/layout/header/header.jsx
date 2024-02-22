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
import { loadState, saveState } from "../../data/lib/storage";

export const Header = () => {
  const token = loadState("user");
  const [state, setState] = React.useState(false);


  const lagout = () => {
    localStorage.removeItem("user");
    setState(false)
  }
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
        {token ? (
          <button
            onClick={() => setState(!state)}
            className="w-[50px] h-[50px] rounded-full bg-slate-500 flex justify-center items-center relative"
          >
            {token.user.email[0].toUpperCase()}
          </button>
        ) : (
          <Button />
        )}
        {state && (
          <div className="w-[30%] py-24 rounded-xl bg-slate-500 flex flex-col justify-center items-center gap-5 absolute top-[20%] right-[10%]">
            <Link
              to="/elektron"
              className=" shadow-xl py-2 px-9 rounded-xl bg-slate-200"
            >
              Profilga o'tish
            </Link>
            <button
              onClick={lagout}
              className=" shadow-xl py-2 px-9 rounded-xl bg-slate-200"
            >
              Logaut
            </button>
          </div>
        )}
      </div>
      <div>
        <HeaderBottom />
      </div>
    </>
  );
};
