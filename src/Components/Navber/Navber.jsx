import React from "react";
import dollerImg from "../../assets/dollar 1.png"

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div>
          <button className="flex justify-between items-center gap-2">
            0 Coins
            <img src={dollerImg} alt="doller" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
