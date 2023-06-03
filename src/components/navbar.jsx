import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pokemon_logo.png";

function Navbar() {
  return (
    <nav className="uppercase font-normal w-full z-20 flex justify-between items-center p-5">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
      <div>
        <Link
          to="/"
          className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/pokedex"
          className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        >
          Pokedex
        </Link>
        <Link
          to="/login"
          className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
