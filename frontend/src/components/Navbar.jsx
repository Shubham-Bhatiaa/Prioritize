import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-white text-2xl font-bold tracking-wide">
        Prioritize
      </h1>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 font-semibold text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
