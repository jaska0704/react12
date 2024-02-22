import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { nanoid } from "nanoid";
import { main_pages } from "./router/main.router";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
