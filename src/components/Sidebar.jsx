import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-card border-r border-border p-6">
      <h1 className="text-2xl font-bold text-primary mb-8">FinTrack</h1>

      <nav className="space-y-4 text-textSecondary">
        <p className="hover:text-primary cursor-pointer font-medium">
          Dashboard
        </p>
        <p className="hover:text-primary cursor-pointer">Transactions</p>
        <p className="hover:text-primary cursor-pointer">Insights</p>
      </nav>
    </div>
  );
};

export default Sidebar;
