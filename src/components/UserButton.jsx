import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserButton({ user, setRender, setUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("beekin_user_cred");
    setRender((prev) => !prev);
    setUser(null);
  };

  return (
    <div className="relative text-black">
      <button
        className="bg-[#277ffe] text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring"
        onClick={toggleDropdown}
      >
        {user?.user.fullName.charAt(0).toUpperCase()}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow z-50">
          <ul>
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-sm"
              onClick={handleLogout}
            >
              Logout
            </li>
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-sm"
              onClick={()=>{handleNavigate("/myjobs")}}
            >
            Applied Jobs
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
