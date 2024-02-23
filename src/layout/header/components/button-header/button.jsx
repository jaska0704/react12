import React from "react";
import img from "../../../../assets/header-img/user.svg";
import { requist } from "../../../../data/config/request";
import { saveState } from "../../../../data/lib/storage";
import { Link, useNavigate } from "react-router-dom";

export const Button = () => {
  const [regstate1, setRegstate1] = React.useState(false);
  const [regstate, setRegstate] = React.useState(false);
  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [firstname, SetFirstname] = React.useState("");
  const [foto, SetFoto] = React.useState("");
  // const [phone, SetPhone] = React.useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    requist
      .post("/register", {
        email,
        password,
        firstname,
        foto,
      })
      .then((res) => {
        saveState("user", res.data);
        console.log(res);
        navigate("/home", setRegstate(false));
      });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    requist
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        saveState("user", res.data);
        console.log(res);
        navigate("/home" , setRegstate1(false))
      });
  };

  return (
    <>
      <button
        className="btn btn-primary font-bold text-lg relative"
        onClick={() => setRegstate(!regstate)}
      >
        <img src={img} alt="" />
        Кириш
      </button>
      {regstate && (
        <div className=" absolute top-[30%] right-[20%] w-[50%]">
          <form onSubmit={submit} method="dialog">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Ассалому алайкум Хуш келибсиз!
              </h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Мобил рақам ёки эмайл киритинг?
                  </span>
                </div>
                <input
                  type="email"
                  laceholder="+998 -- --- -- --"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Исм/Фамилиянгизни киритинг</span>
                </div>
                <input
                  type="text"
                  placeholder="Исм/Фамилиянгиз"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => SetFirstname(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Профил расмни киритинг</span>
                </div>
                <input
                  type="text"
                  placeholder="Исм/Фамилиянгиз"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => SetFoto(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Паролни киритинг</span>
                </div>
                <input
                  type="password"
                  placeholder="Паролни киритинг"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </label>
              <div className="modal-action">
                <div className="flex justify-between items-center w-full">
                  <button className="btn">Руйхатдан утинг</button>
                  <Link>
                    <h3
                      onClick={() => {
                        setRegstate1(true);
                        setRegstate(false);
                      }}
                      className="text-blue-600"
                    >
                      Логин оркали киринг?!
                    </h3>
                  </Link>
                  <button onClick={() => setRegstate(false)} className="btn">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      {regstate1 && (
        <div className=" absolute top-[35%] right-[20%] w-[50%]">
          <form onSubmit={onsubmit} method="dialog">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Ассалому алайкум Хуш келибсиз!
              </h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Мобил рақам ёки эмайл киритинг?
                  </span>
                </div>
                <input
                  type="email"
                  laceholder="+998 -- --- -- --"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Паролни киритинг</span>
                </div>
                <input
                  type="password"
                  placeholder="Паролни киритинг"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </label>
              <div className="modal-action">
                <div className="flex justify-between items-center w-full">
                  <button className="btn">Профилга утиш</button>
                  <button onClick={() => setRegstate1(false)} className="btn">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
