import React from "react";
import { HomeHero } from "./components/home-hero";
import { InfoHome } from "./components/info-home";
import chaqmoq from "../../assets/home-img/chaqmoq.svg";
import himoya from "../../assets/home-img/himoya.svg";
import layk from "../../assets/home-img/layk.svg";
import yulduz from "../../assets/home-img/yulduz.svg";
import { RuknlarComp } from "./components/ruknlar-comp";
import { dataRuknlar } from "../../data/ruknlar-data";

export const Home = () => {
  let a = 0;
  return (
    <>
      <HomeHero />
      <div className="flex flex-wrap gap-5 max-w-[1300px] mx-auto mb-28">
        <InfoHome
          title={"Тезкор етказиш"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          img={chaqmoq}
        />
        <InfoHome
          title={"Тўлов химояси"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          img={himoya}
        />
        <InfoHome
          title={"Юқори сифат"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          img={layk}
        />
        <InfoHome
          title={"Энг сара китоблар"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          img={yulduz}
        />
      </div>
      <div className=" flex flex-col relative">
        <h2 className="container max-w-[1300px] mx-auto font-semibold text-3xl py-5">
          Рукнлар
        </h2>
        <div className="carousel flex gap-1 max-w-[1300px] mx-auto">
          {dataRuknlar.map((item) => (
            <RuknlarComp img={item.img} title={item.title} id={item.id} />
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#1" className="btn btn-xs">
            1
          </a>
          <a href="#12" className="btn btn-xs">
            2
          </a>
        </div>
      </div>
    </>
  );
};
