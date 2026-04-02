import React from "react";
import {
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartSection = ({ transactions }) => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const categoryData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const monthlyMap = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("en-IN", {
      month: "short",
      year: "numeric",
    });

    if (!monthlyMap[month]) {
      monthlyMap[month] = 0;
    }
    if (t.type === "income") {
      monthlyMap[month] += t.amount;
    } else {
      monthlyMap[month] -= t.amount;
    }
  });

  const monthlyData = Object.keys(monthlyMap).map((month) => ({
    month,
    balance: monthlyMap[month],
  }));

  const COLORS = ["#6366F1", "#22C55E", "#F87171", "#A78BFA", "#FBBF24"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <p className="text-textPrimary font-medium">Balance Overview</p>
        <LineChart
          width={window.innerWidth < 768 ? 300 : 400}
          height={220}
          data={monthlyData}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#6366F1" />
        </LineChart>
      </div>
      <div className="bg-card p-6 rounded-xl shadow-sm ">
        <p className="text-textPrimary font-medium">Spending Breakdown</p>
        <div className="flex flex-col items-center justify-center mt-2">
          <PieChart width={300} height={220}>
            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={80}
              cx="50%"
              cy="48%"
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
