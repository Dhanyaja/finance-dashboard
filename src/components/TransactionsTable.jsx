import React, { useState } from "react";

const TransactionsTable = ({ role, setShowModal, transactions }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-card p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-textPrimary mb-4">
        Transactions
      </h3>

      <div className="flex gap-4 mb-6 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-border rounded-lg px-3 py-2 flex-1"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-border rounded-lg px-3 py-2"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {role === "Admin" && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg mb-4 hover:opacity-90 transition active:scale-95"
        >
          + Add Transaction
        </button>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[500px]">
          <thead>
            <tr className="text-textSecondary border-b">
              <th className="py-3">Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-textSecondary">
                  No transactions found
                </td>
              </tr>
            ) : (
              filteredData.map((t) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-primary/5 h-14 transition border-border"
                >
                  {/* DATE */}
                  <td className="py-3">
                    {new Date(t.date).toLocaleDateString("en-IN")}
                  </td>
                  {/* AMOUNT */}
                  <td
                    className={
                      t.type === "income"
                        ? "text-success font-medium"
                        : "text-danger font-medium"
                    }
                  >
                    ₹{t.amount.toLocaleString("en-IN")}
                  </td>
                  {/* CATEGORY */}
                  <td className="text-textPrimary">{t.category}</td>

                  {/* TYPE */}
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${t.type === "income" ? "bg-green-100 text-success" : "bg-red-100 text-danger"}`}
                    >
                      {t.type}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
