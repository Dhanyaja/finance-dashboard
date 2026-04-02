import React from "react";

const Header = ({ role, setRole }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-textPrimary">Dashboard</h2>

      <div className="flex items-center gap-4">
        <p className="text-sm text-textSecondary">
          Role: <span className="text-primary font-medium">{role}</span>{" "}
        </p>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-border rounded-lg px-3 py-2 text-textPrimary"
        >
          <option>Admin</option>
          <option>Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
