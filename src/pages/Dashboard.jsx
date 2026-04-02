import React, { useState } from "react";
import { transactions as initialData } from "../data/mockData";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import ChartSection from "../components/ChartSection";
import TransactionsTable from "../components/TransactionsTable";
import Insights from "../components/Insights";
import AddTransactionModal from "../components/AddTransactionModal";

const Dashboard = () => {
  const [role, setRole] = useState("Viewer");
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState(initialData);

  return (
    <div className="flex bg-bg min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 md:p-6 md:ml-64">
        <Header role={role} setRole={setRole} />

        <div className="mt-6 space-y-6">
          <div id="dashboard">
            <DashboardCards transactions={transactions} />
          </div>
          <div id="charts">
            <ChartSection transactions={transactions} />
          </div>
          <div id="transactions">
            <TransactionsTable
              role={role}
              setShowModal={setShowModal}
              transactions={transactions}
            />
          </div>
          <div className="border-t border-border pt-4 mt-6"></div>
          <div id="insights">
            <Insights transactions={transactions} />
          </div>
        </div>
      </div>
      {showModal && (
        <AddTransactionModal
          setShowModal={setShowModal}
          setTransactions={setTransactions}
        />
      )}
    </div>
  );
};

export default Dashboard;
