import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formValue.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formValue.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const token = "staff";
    const role = "staff";

    sessionStorage.setItem("access_token", token);
    sessionStorage.setItem("role", role);

    navigate("/hub");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-theme">

      <div className="w-[380px]">

        {/* LOGO */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
            <span className="text-green-400">{`</>`}</span>
            ZOPHRIX
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            College Staff Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="staff@college.edu"
              value={formValue.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 bg-theme border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
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
                className="w-full mt-2 px-4 py-3 pr-12 bg-theme border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-card-bg-theme hover:bg-green-600 text-black font-medium py-3 rounded-lg transition"
          >
            Sign In
          </button>

          <p className="text-center text-gray-500 text-sm pt-2">
            Contact admin for access credentials
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;