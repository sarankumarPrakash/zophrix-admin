import React, { useState } from "react";
import { Eye, EyeOff, Code2 } from "lucide-react";

export default function StaffLoginPage() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-[#1B2A44] bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#6B7280] outline-none focus:border-[#22C55E]";

  const labelClass = "mb-2 block text-sm text-[#D1D5DB]";

  return (
    <div className="min-h-screen bg-[#020B16] flex items-center justify-center px-4">
      <div className="w-full max-w-[520px] rounded-xl border border-[#2A3140] bg-[#020B16] p-6">
        <div className="mb-7 text-center">
          <div className="flex items-center justify-center gap-2">
            <Code2 className="h-6 w-6 text-[#34E27A]" />
            <h1 className="text-3xl font-semibold">ZOPHRIX</h1>
          </div>
          <p className="mt-1 text-sm text-[#94A3B8]">College Staff Portal</p>
        </div>

        {mode === "login" && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                placeholder="staff@college.edu"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`${inputClass} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <button
                onClick={() => setMode("forgot")}
                className="text-gray-400 hover:text-green-400"
              >
                Forgot Password
              </button>

              <button
                onClick={() => setMode("register")}
                className="text-gray-400 hover:text-green-400"
              >
                New Account
              </button>
            </div>

            <button className="w-full rounded-xl bg-green-500 py-3 font-medium text-black hover:bg-green-400">
              Sign In
            </button>

            <p className="text-center text-xs text-gray-400">
              Contact admin for access credentials
            </p>
          </div>
        )}

        {mode === "register" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input type="text" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Last Name</label>
                <input type="text" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>OTP</label>
                <input type="text" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`${inputClass} pr-10`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className={labelClass}>Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className={`${inputClass} pr-10`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full rounded-xl bg-green-500 py-3 font-medium text-black hover:bg-green-400">
              Create Account
            </button>

            <p className="pt-1 text-center text-sm text-gray-400">
              Already have account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-green-400 hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        )}

        {mode === "forgot" && (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>OTP</label>
              <input type="text" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>New Password</label>
              <input type="password" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Confirm Password</label>
              <input type="password" className={inputClass} />
            </div>

            <button className="w-full rounded-xl bg-green-500 py-3 font-medium text-black hover:bg-green-400">
              Reset Password
            </button>

            <p className="text-center text-sm text-gray-400">
              Back to{" "}
              <button
                onClick={() => setMode("login")}
                className="text-green-400 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}