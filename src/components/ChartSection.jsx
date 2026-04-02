import React from "react";

const ChartSection = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <p className="text-textPrimary font-medium">Balance Overview</p>
        <div className="h-40 flex items-center justify-center text-textSecondary">
          Line Chart
        </div>
      </div>
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <p className="text-textPrimary font-medium">Spending Breakdown</p>
        <div className="h-40 flex items-center justify-center text-textSecondary">
          Pie Chart
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
