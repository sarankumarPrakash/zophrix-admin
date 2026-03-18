import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ROLE LOGIC
    const role = formValue.email.toLowerCase().includes("admin") ? "admin" : "staff";
    
    sessionStorage.setItem("access_token", "secure_token_123");
    sessionStorage.setItem("role", role);

    // DIFFERENT PORTAL REDIRECTION
    if (role === "admin") {
      navigate("/admin-hub"); // Admin Portal URL
    } else {
      navigate("/hub"); // Staff Portal URL
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-[400px] p-8 rounded-xl">
        <h1 className="text-green-400 text-center text-3xl font-bold mb-1">&lt;/&gt; ZOPHRIX</h1>
        <p className="text-gray-400 text-center mb-10 text-lg">College Admin Portal</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="admin or staff"
              className="w-full mt-2 px-4 py-3 rounded bg-[#1a1f24] text-white border border-gray-700 focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="text-gray-400 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full mt-2 px-4 py-3 pr-10 rounded bg-[#1a1f24] text-white border border-gray-700 focus:outline-none focus:border-green-400"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 mt-1">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link - Exactly like the image */}
          <div className="flex justify-end">
            <button type="button" className="text-green-500 hover:text-green-400 text-sm">
              Forgot Password?
            </button>
          </div>
          
          {/* Sign In Button */}
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 py-3 rounded text-black font-semibold text-lg">
            Sign In
          </button>

          {/* Bottom Sentence - Exactly like the image */}
          <p className="text-gray-500 text-center text-sm mt-8">
            Contact admin for access credentials
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;