import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { logout } from "../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);

    try {
      await authService.logout();
      dispatch(logout());
    } catch (err) {
      console.error("Logout failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`inline-block px-6 py-2 duration-200 rounded-full ${
        loading ? "bg-gray-300 cursor-not-allowed" : "hover:bg-red-700"
      }`}
      onClick={logoutHandler}
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}

export default LogoutBtn;
