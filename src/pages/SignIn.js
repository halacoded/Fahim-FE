import React, { useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { signin } from "../api/users/Auth"; // Ensure this import matches your project structure
import "./SignIn.css"; // Import the CSS file

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [user, setUser] = useContext(UserContext);

  const { mutate } = useMutation({
    mutationKey: ["signin"],
    mutationFn: () => signin(formData),
    onSuccess: (data) => {
      setUser(data.user);
    },
    onError: (error) => {
      setError(
        error.response?.data?.message || "An error occurred during signin"
      );
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  if (user) {
    return <Navigate to="/main" />;
  }

  return (
    <div className="Signin-container">
      <div className="signin-box">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" disabled={mutate.isLoading}>
              {mutate.isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          {error && <div className="error-message">{error}</div>}
          <div className="register">
            <p>
              New here? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
