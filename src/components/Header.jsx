import React, { useState } from "react";

const Header = ({ role, setRole }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-textPrimary">Dashboard</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-md bg-card border border-border"
        >
          {dark ? "☀️" : "🌙"}
        </button>
        <p className="text-sm text-textSecondary">
          Role: <span className="text-primary font-medium">{role}</span>{" "}
        </p>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-border rounded-lg px-2 py-2 text-textPrimary bg-card"
        >
          <option>Admin</option>
          <option>Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
