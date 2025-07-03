import React, { useState } from "react";
import Banner from "@/components/banner";
import { Link, useNavigate } from "react-router";
import axiosInstance from "@/utils/axios-instance";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemeber] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Email is invalid";
    if (!password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setLoading(true);
      try {
        const response = await axiosInstance.post("/auth/signin", {
          email,
          password,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.data);
          navigate("/projects");
        }
        setErrors({});
      } catch (err) {
        console.log(err);
        if (err.response) {
          alert(err.response.data.error.explanation);
        } else {
          alert("Login failed. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen ">
      {/* Banner Left */}
      <Banner />

      <div className="w-full lg:w-1/3 flex items-center justify-center bg-gray-50 p-6 font-poppins">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-lg p-8 "
        >
          <div className="text-center mb-6 flex flex-col gap-2">
            <img
              src="/images/form-logo.svg"
              alt="Logo"
              className="mx-auto w-16 h-16 lg:w-20 lg:h-20"
            />
            <h2 className="text-3xl  text-purple-500 tracking-widest font-extralight ">
              Welcome to <br />
              <span className="tex-2xl text-purple-700 font-semibold">
                Ques.AI
              </span>
            </h2>
          </div>

          <div className="mb-4">
            <input
              placeholder="Email address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                onChange={(e) => setRemeber(e.target.value)}
                checked={remember}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
              {loading ? "Logging in..." : "Login"}
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center hover:bg-gray-100"
          >
            <img
              src="/icons/google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-600 hover:underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
