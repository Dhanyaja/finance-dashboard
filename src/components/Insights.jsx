const Insights = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "";
  let maxAmount = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > maxAmount) {
      maxAmount = categoryMap[key];
      highestCategory = key;
    }
  }

  return (
    <div className="bg-card p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-textPrimary mb-4">Insights</h3>

      <div className="space-y-3 text-textPrimary">
        <p>
          💰 Total Income:
          <span className="text-success font-medium ml-2">
            ₹{income.toLocaleString("en-IN")}
          </span>
        </p>

        <p>
          💸 Total Expenses:
          <span className="text-danger font-medium ml-2">
            ₹{expenses.toLocaleString("en-IN")}
          </span>
        </p>

        <p>
          💵 Savings:
          <span className="text-primary font-medium ml-2">
            ₹{balance.toLocaleString("en-IN")}
          </span>
        </p>

        <p>
          📊 Highest Spending Category:
          <span className="font-medium ml-2">{highestCategory || "N/A"}</span>
        </p>

        <p className="text-textSecondary mt-4">
          💡 You are spending most on{" "}
          <span className="text-primary font-medium">
            {highestCategory || "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Insights;
