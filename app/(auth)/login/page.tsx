"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/lib/validation/auth";
import AuthInput from "@/components/auth/AuthInput";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data);

    // TEMP: mock auth
    await new Promise((res) => setTimeout(res, 1000));

    // later:
    // - call API
    // - handle errors
    // - redirect to dashboard
  };

  return (
    <>
      <header className="mb-8 sm:mb-10 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
          Welcome back
        </h2>
        <p className="text-sm text-slate-600">
          Sign in to continue to your dashboard
        </p>
      </header>

      <div className="space-y-3">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
        >
          <span className="relative h-5 w-5">
            <img src="/img/google.png" alt="Google" className="h-5 w-5" />
          </span>
          Continue with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-full bg-[#1877F2] py-3 text-sm font-medium text-white hover:bg-[#166FE5] transition"
        >
          <span className="relative h-5 w-5">
            <img src="/img/facebook.webp" alt="Google" className="h-5 w-5" />
          </span>
          Continue with Facebook
        </button>
      </div>

      <div className="flex items-center my-8 sm:my-10">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="px-4 text-xs text-slate-400">or</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInput
          type="email"
          placeholder="Email address"
          registration={register("email")}
          error={errors.email}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          registration={register("password")}
          error={errors.password}
          showTogglePassword
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 rounded-full bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 sm:mt-8 text-sm text-center text-slate-600">
        Don’t have an account?{" "}
        <a
          href="/register"
          className="font-medium text-slate-900 hover:underline"
        >
          Create one
        </a>
      </p>
    </>
  );
}
