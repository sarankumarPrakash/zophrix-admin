import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = "staff";
    const role = "staff";

    sessionStorage.setItem("access_token", token);
    sessionStorage.setItem("role", role);

    navigate("/hub");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">

      {/* LOGIN CARD */}
      <div className="w-[400px] p-8 rounded-xl shadow-xl">

        {/* LOGO */}
        <h1 className="text-green-400 text-center text-2xl font-bold">
          &lt;/&gt; ZOPHRIX
        </h1>

        <p className="text-gray-400 text-center mb-6">
          College Student Portal
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-gray-400 text-sm">Email</label>

            <input
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="student@college.edu"
              className="w-full mt-2 px-4 py-2 rounded bg-[#1a1f24] text-white border border-gray-600 focus:outline-none focus:border-green-400"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-gray-400 text-sm">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValue.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full mt-2 px-4 py-2 pr-10 rounded bg-[#1a1f24] text-white border border-gray-600 focus:outline-none focus:border-green-400"
              />

              {/* EYE ICON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-green-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 py-2 rounded text-black font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* CREATE ACCOUNT */}
        {/* <p className="text-gray-400 text-center text-sm mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-green-400 hover:underline"
          >
            Create Account
          </button>
        </p> */}

        {/* FOOTER */}
        <p className="text-gray-500 text-center text-sm mt-4">
          Contact admin for access credentials
        </p>
      </div>
    </div>
  );
};

export default Login;