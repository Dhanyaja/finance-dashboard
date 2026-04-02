import React from "react";

const TransactionsTable = () => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-textPrimary mb-4">
        Transactions
      </h3>
      <input
        type="text"
        placeholder="Search..."
        className="border border-border rounded-lg px-3 py-2 w-full mb-4"
      />
      <div className="text-textSecondary">Tbale will come</div>
    </div>
  );
};

export default TransactionsTable;
