import { Home } from "../pages/home";
import { Audiokitob } from "../pages/audiokitob";
import { BosmaKitob } from "../pages/bosmakitob";
import { ElektronKitob } from "../pages/elektron";
import { Kontakt } from "../pages/kontakt";
import { BizHaqimizda } from "../pages/bizhaqimizda/bizhaqimizda";


export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <Audiokitob />,
    path: "auidokitob",
  },
  {
    component: <ElektronKitob />,
    path: "elektron",
  },
  {
    component: <BosmaKitob />,
    path: "bosmaKitob",
  },
  {
    component: <Kontakt />,
    path: "kontact",
  },
  {
    component: <BizHaqimizda/>,
    path: "bizHaqimizda",
  },
];
