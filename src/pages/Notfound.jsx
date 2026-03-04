import React from "react";
import notfound from "../../src/assets/images/notfound.jpg";
import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center   from-gray-100 to-gray-200 p-2">
      <Paper
        elevation={0}
        className="w-full max-w-2xl p-8 text-center rounded-2xl shadow-xl backdrop-blur-lg bg-white/80"
      >
        {/* Image */}
        <img
          src={notfound}
          alt="Not Found"
          className="mx-auto w-2/3 h-auto mb-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
        />

        {/* Heading */}
        <Typography
          variant="h3"
          className="font-extrabold mb-8 text-gray-700 tracking-wide"
        >
          Page Not Found
        </Typography>

        {/* Subtext */}
        <Typography
          variant="h6"
          className="text-gray-600 mb-8 mt-8 leading-relaxed"
        >
          Oops! The page you are searching for does not exist or may have been
          moved. Please navigate back to a safe place.
        </Typography>

        {/* Button */}
        <button
          onClick={handleback}
          className="capitalize px-8 py-3 mt-8 text-lg font-semibold text-white bg-[#05031f] rounded-xl shadow-md hover:bg-[#05031f] hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          Go Back
        </button>
      </Paper>
    </div>
  );
};

export default Notfound;
