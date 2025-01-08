import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10 items-center h-screen bg-zinc-900">
      {/* App Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Prioritize
        </h1>
        <p className="text-white mt-6">
          "Organize your tasks effortlessly and stay productive ✅"
        </p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-zinc-700 border-2 p-8 rounded-lg shadow-xl w-80"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white text-zinc-700 font-semibold placeholder-gray-300 border-none p-3 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#EFDBCB]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white text-zinc-700 font-semibold placeholder-gray-300 border-none p-3 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#EFDBCB]"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full transition duration-300 hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {/* Register Link */}
      <button
        className="mt-4 text-white "
        onClick={() => navigate("/register")}
      >
        Don't have an account?
        <span className="text-white ml-1 underline hover:text-blue-500 transition duration-300 ">
          Register
        </span>
      </button>
    </div>
  );
};

export default Login;
