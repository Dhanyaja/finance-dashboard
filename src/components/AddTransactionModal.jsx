import React, { useState } from "react";

const AddTransactionModal = ({ setShowModal, setTransactions }) => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleAdd = () => {
    const newTransaction = {
      id: Date.now(),
      date: form.date,
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
    };

    setTransactions((prev) => [...prev, newTransaction]);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

        <input
          type="number"
          placeholder="Amount"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <select
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="date"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <button onClick={() => setShowModal(false)}>Cancel</button>

          <button
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
