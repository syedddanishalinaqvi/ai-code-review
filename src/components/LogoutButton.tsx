"use client"; // Needed for interactivity

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
    >
      Logout
    </button>
  );
}