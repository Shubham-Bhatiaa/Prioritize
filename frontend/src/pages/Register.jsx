import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
        console.log(err)
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Prioritize
        </h1>
        <p className="text-white mt-6">
          "Organize your tasks effortlessly and stay productive ✅"
        </p>
      </div>
      <form
        onSubmit={handleRegister}
        className="bg-zinc-700 border-2 p-8 rounded-lg shadow-xl w-80"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Register
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="bg-white text-zinc-700 font-semibold placeholder-gray-300 border-none p-3 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#EFDBCB]"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white text-zinc-700 font-semibold placeholder-gray-200 border-none p-3 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#EFDBCB]"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="bg-white text-zinc-700 font-semibold placeholder-gray-200 border-none p-3 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#EFDBCB]"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full transition duration-300 hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <button className="mt-4 text-white " onClick={() => navigate("/login")}>
        Don't have an account?
        <span className="text-white ml-1 underline hover:text-blue-500 transition duration-300">
          Login
        </span>
      </button>
    </div>
  );
};

export default Register;
