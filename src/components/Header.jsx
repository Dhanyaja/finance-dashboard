import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-textPrimary">Dashboard</h2>
      <select className="border border-border rounded-lg px-3 py-2 text-textPrimary">
        <option>Admin</option>
        <option>Viewer</option>
      </select>
    </div>
  );
};

export default Header;
