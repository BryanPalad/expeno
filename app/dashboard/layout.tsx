import LogoutButton from "@/components/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <p className="font-bold mb-4">Expense Tracker</p>
        <nav className="space-y-2 flex-1">
          <a href="/dashboard/expenses" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
            Expenses
          </a>
        </nav>
        <div className="pt-4 mt-4 border-t border-gray-700">
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
