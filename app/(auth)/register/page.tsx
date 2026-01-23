"use client";

export default function RegisterPage() {
  return (
    <>
      <header className="mb-8 sm:mb-10 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
          Create an account
        </h2>
        <p className="text-sm text-slate-600">
          Start managing your expenses today
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
          Sign up with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-full bg-[#1877F2] py-3 text-sm font-medium text-white hover:bg-[#166FE5] transition"
        >
          <span className="relative h-5 w-5">
            <img src="/img/facebook.webp" alt="Google" className="h-5 w-5" />
          </span>
          Sign up with Facebook
        </button>
      </div>

      <div className="flex items-center my-8 sm:my-10">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="px-4 text-xs text-slate-400">or</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-full bg-white px-5 py-3 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-full bg-white px-5 py-3 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full rounded-full bg-white px-5 py-3 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand"
        />

        <button
          type="submit"
          className="w-full mt-2 rounded-full bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 sm:mt-8 text-sm text-center text-slate-600">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-slate-900 hover:underline">
          Sign in
        </a>
      </p>
    </>
  );
}
