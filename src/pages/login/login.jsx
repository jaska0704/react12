import React from "react";
import { requist } from "../../data/config/request";
import { useNavigate } from "react-router-dom";
import { loadState, saveState } from "../../data/lib/storage";
import { data } from "autoprefixer";

export const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.preventDefault();
    requist
      .post("/login", data)
      .then((res) => {
        saveState("user", res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
        localStorage.clear("user");
      })
      .finally(() => {
        if (loadState("user")) {
          navigate("/home", { replace: true });
        }
      });
    reset();
  };

  return (
    <div className="h-[775px] flex justify-center items-center bg-fuchsia-500">
      <form
        onSubmit={onSubmit}
        className=" px-32 py-16 bg-slate-500 flex flex-col gap-7 w-[50%] rounded-xl"
      >
        <input className="w-full p-4 rounded-xl" type="email" name="email" />
        <input
          className="w-full p-4 rounded-xl"
          type="password"
          name="password"
        />
        <div>
          <button className=" px-14 py-3 bg-amber-700 text-white rounded-xl">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
