export default function ExpensesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Add Expense
      </button>

      <ul className="space-y-2">
        <li className="p-4 bg-white rounded shadow">
          ₱500 – Food
        </li>
        <li className="p-4 bg-white rounded shadow">
          ₱1200 – Transport
        </li>
      </ul>
    </div>
  );
}
