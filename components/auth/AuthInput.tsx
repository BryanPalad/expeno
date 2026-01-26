"use client";

import { useState } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type AuthInputProps = {
  type?: "text" | "email" | "password";
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  showTogglePassword?: boolean;
};

export default function AuthInput({
  type = "text",
  placeholder,
  registration,
  error,
  showTogglePassword = false,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType =
    isPassword && showTogglePassword
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="relative">
      <input
        type={inputType}
        placeholder={placeholder}
        {...registration}
        className="w-full rounded-full bg-white px-5 py-3 pr-16 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand"
      />

      {isPassword && showTogglePassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 hover:text-slate-700 cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
