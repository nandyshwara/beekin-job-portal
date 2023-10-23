import React from "react";
import logo from "../assets/images/beekinLogo.png";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../helpers/authHelper";
import UserButton from "./UserButton";
function Navbar({ user, setRender, setUser }) {
  const handleNavigate = useNavigate();

  const navOptions = [
    {
      name: "Jobs By Categories",
      path: "/categories",
    },
  ];
  return (
    <div>
      <div className="w-10/12 mx-auto flex flex-row mt-10 my-auto">
        <div className="w-10/12 flex flex-row justify-between mx-auto">
          <img onClick={()=>handleNavigate("/")} src={logo} alt="logo" className="h-8" />
          <div className="flex flex-row gap-x-5 font-semibold text-xl text-slate-600 cursor-pointer">
            {navOptions.map((currEle, index) => {
              return (
                <p onClick={() => handleNavigate(currEle.path)} key={index}>
                  {currEle.name}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          {isAuth() ? (
            <UserButton user={user} setRender={setRender} setUser={setUser} />
          ) : (
            <button
              className="hidden md:block rounded-full border-[1px] text-xl text-white px-5 py-2 bg-[#277FFE] transition-all ease-out"
              onClick={() => handleNavigate("/signin")}
            >
              Get started
            </button>
          )}
        </div>
      </div>
      <hr className="border-2 border-[#277FFE] mt-10 mb-5 w-10/12 mx-auto"></hr>
    </div>
  );
}

export default Navbar;
