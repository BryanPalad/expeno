import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center px-16 xl:px-20">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">Expeno</h1>

          <p className="text-slate-600 max-w-sm leading-relaxed mb-12">
            Track your expenses, stay in control, and build better financial
            habits.
          </p>

          <div className="relative h-64">
            <Image
              src="/img/money-save.jpg"
              alt="Saving money illustration"
              fill
              className="object-cover rounded-2xl shadow-sm"
              priority
            />
          </div>
        </div>

        <div className="flex items-center justify-center px-5 sm:px-8 bg-white">
          <div className="w-full max-w-sm py-12 sm:py-16">{children}</div>
        </div>
      </div>
    </div>
  );
}
