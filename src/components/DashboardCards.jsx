import React from "react";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <p className="text-textSecondary">Total Balance</p>
        <h3 className="text-xl font-semibold text-textPrimary mt-2">₹75,250</h3>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm">
        <p className="text-textSecondary">Income</p>
        <h3 className="text-xl font-semibold text-success mt-2">₹1,20,000</h3>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-sm">
        <p className="text-textSecondary">Expenses</p>
        <h3 className="text-xl font-semibold text-danger mt-2">₹44,750</h3>
      </div>
    </div>
  );
};

export default DashboardCards;
