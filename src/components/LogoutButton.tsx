"use client"; 

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout =async () => {
    await signOut({callbackUrl: "/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-1 bg-white text-black rounded hover:bg-gray-700 transition"
    >
      Logout
    </button>
  );
}