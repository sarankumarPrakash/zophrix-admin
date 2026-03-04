import React from "react";
import registerImg from "../assets/images/login.jpg";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AuthService } from "../Service";
import { RegisterSchema } from "../Validation/register.schema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Newuser = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await AuthService.register(values);
      if (response) navigate("/signup");
    } catch (err) {
      console.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full h-screen flex overflow-hidden bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 h-[80%] items-center justify-center">
        <img src={registerImg} alt="Newuser" className="w-[80%]" />
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-col w-[80%] lg:w-1/2 px-10 lg:px-20 justify-center">
        <h1 className="text-6xl font-bold text-[#033047]">Arena</h1>
        <p className="text-lg font-semibold text-gray-800 mt-1">
          Create your account
        </p>

        <Formik
          initialValues={{
            user_name: "",
            email: "",
            password: "",
            confirmpassword:"",
          
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-0 space-y-4">
              <FormField label="Username" name="user_name" />
              <FormField label="Email" name="email" type="email" />
              <FormField label="Password" name="password" type="password" />
              <FormField label="Confirm Password" name="confirmpassword" type="password" />
             

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#024861] text-white py-3 rounded-lg text-lg hover:bg-[#036280] transition-all disabled:opacity-50"
              >
                Create Account
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-2 text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-[#036280] font-medium hover:underline"
          >
            Sign In
          </button>
        </p>

        <p className="text-center text-gray-400 text-sm mt-8">
          © Zophrix All Rights Reserved
        </p>
      </div>
    </div>
  );
};

/* ===================== REUSABLE FIELD ===================== */

const FormField = ({ label, name, type = "text" }) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="text-gray-700 font-medium">{label}</label>

      <div className="relative">
        <Field
          name={name}
          type={isPassword && showPassword ? "text" : type}
          className={`w-full mt-2 px-4 py-3 ${
            isPassword ? "pr-12" : ""
          } rounded-lg border border-gray-300 focus:outline-none focus:border-[#036280]`}
        />

        {/* Eye icon ONLY for password fields */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};


export default Newuser;
