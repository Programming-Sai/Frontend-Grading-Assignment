import React from "react";
import { Navigate } from "react-router-dom";
import { BASE_PATH } from "../../BasePath";

// A simple function to check if the user is authenticated
const isAuthenticated = () => {
  // You can use `localStorage` or a global state to check if the user is logged in
  return localStorage.getItem("authToken") !== null;
};

// Protected Route Component
function ProtectedRoute({ element }) {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to={`${BASE_PATH}/login`} replace />
  );
}

export default ProtectedRoute;
