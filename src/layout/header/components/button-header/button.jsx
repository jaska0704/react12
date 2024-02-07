import React from "react";
import img from "../../../../assets/header-img/user.svg";

export const Button = () => {
  return (
    <>
      <button
        className="btn btn-primary font-bold text-lg"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <img src={img} alt="" />
        Кириш
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Ассалому алайкум Хуш келибсиз!</h3>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Мобил рақам?</span>
            </div>
            <input
              type="text"
              placeholder="+998 -- --- -- --"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
