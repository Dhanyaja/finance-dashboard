import React, { useState } from "react";
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

  return (
    <div className="flex bg-bg min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 md:p-6 md:ml-64 overflow-hidden">
        <Header role={role} setRole={setRole} />

        <div className="mt-6 space-y-6">
          <div id="dashboard">
            <DashboardCards />
          </div>
          <div id="charts">
            <ChartSection />
          </div>
          <div id="transactions">
            <TransactionsTable
              role={role}
              setShowModal={setShowModal}
            />
          </div>
          <div className="border-t border-border pt-4 mt-6"></div>
          <div id="insights">
            <Insights/>
          </div>
        </div>
      </div>
      {showModal && (
        <AddTransactionModal
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
