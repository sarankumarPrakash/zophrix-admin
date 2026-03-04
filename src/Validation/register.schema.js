import * as Yup from "yup";

/* ------------------------- COMMON SECURITY REGEX ------------------------- */

// Blocks HTML tags & script injections
const noHTML = /^(?!.*<[^>]+>).*$/;

// Allows only letters, numbers, underscore (safe for usernames)
const safeUsername = /^[a-zA-Z0-9_]+$/;

// Strong password (no spaces, allows symbols)
const safePassword = /^(?!.*\s).{6,}$/;

export const RegisterSchema = Yup.object().shape({
  user_name: Yup.string()
    .trim()
    .min(3, "Minimum 3 characters")
    .matches(safeUsername, "Only letters, numbers, and underscore allowed")
    .matches(noHTML, "Invalid characters detected")
    .required("Username is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .matches(noHTML, "Invalid characters detected")
    .required("Email is required"),

  password: Yup.string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .matches(safePassword, "Password must not contain spaces")
    .matches(noHTML, "Invalid characters detected")
    .required("Password is required"),

  confirmpassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
