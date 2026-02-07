"use client";

import { useState } from "react";
import Modal from "./ui/Modal";
import { useRouter } from "next/dist/client/components/navigation";
import { authApi } from "@/lib/api";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authApi.logout();
      toast.success("Successfully logged out!");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full text-left px-3 py-2.5 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Logout"
      >
        <p className="text-gray-600 mb-6 leading-relaxed">
          Are you sure you want to logout? You will need to sign in again to access your account.
        </p>
        <div className="flex gap-3 justify-end mt-6">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-5 py-2.5 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            disabled={isLoggingOut}
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </Modal>
    </>
  );
}