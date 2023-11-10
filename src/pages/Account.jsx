import React, { useEffect } from "react";
import { Dashboard } from "../components/Account/Dashboard";
import { Link, useNavigate } from "react-router-dom";

export const Account = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Dashboard />
    </div>
  );
};
