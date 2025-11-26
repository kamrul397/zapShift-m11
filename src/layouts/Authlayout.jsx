import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router-dom";
import authImg from "../../src/assets/authImage.png";

const Authlayout = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center gap-20 min-h-screen px-4">
      <Logo></Logo>
      <div className="flex">
        {/* Auth related content will be rendered here */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
