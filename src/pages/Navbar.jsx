import React from "react";
import { Link } from "react-router-dom";
import Zophrix from "../assets/images/Zophrix_BG_remove.png";

const Navbar = () => {
  return (
    <nav className="flex w-full h-20 px-10 items-center justify-between bg-white border-b">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={Zophrix}
          alt="Zophrix"
          className="h-52 w-auto object-contain"
        />
      </Link>

      {/* Navigation */}
      <ul className="flex items-center space-x-10 text-base font-medium text-gray-700">

        <li>
          <Link
            to="/how-it-works"
            className="hover:text-[#070127] transition-colors"
          >
            How It Works
          </Link>
        </li>

        <li>
          <Link
            to="/challenges"
            className="hover:text-[#070127] transition-colors"
          >
            Challenges
          </Link>
        </li>

        <li>
          <Link
            to="/companies"
            className="hover:text-[#070127] transition-colors"
          >
            For Companies
          </Link>
        </li>

      </ul>

      {/* Actions */}
      <div className="flex items-center space-x-4">

        <Link
          to="/challenges"
          className="px-5 py-2 bg-[#070127] text-white rounded-lg font-medium hover:scale-105 transition"
        >
          Try a Task
        </Link>

        <Link
          to="/signin"
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
