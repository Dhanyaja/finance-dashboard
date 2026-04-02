import React from "react";

const DashboardCards = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  const formatCurrency = (num) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-textSecondary">Total Balance</p>
        <h3 className="text-xl font-semibold text-textPrimary mt-2">
          ₹{formatCurrency(balance)}
        </h3>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-textSecondary">Income</p>
        <h3 className="text-xl font-semibold text-success mt-2">
          ₹{formatCurrency(income)}
        </h3>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-textSecondary">Expenses</p>
        <h3 className="text-xl font-semibold text-danger mt-2">
          ₹{formatCurrency(expenses)}
        </h3>
      </div>
    </div>
  );
};

export default DashboardCards;
