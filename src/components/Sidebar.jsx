import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["dashboard", "transactions", "insights"];
      const scrollPosition = window.scrollY + 200; // offset for header

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer transition ${active === section ? "text-primary font-semibold" : "text-textSecondary hover:text-primary"}`;

  return (
    <div className="w-64 bg-card border-r border-border p-6 h-screen fixed left-0 top-0 hidden md:block">
      <h1 className="text-2xl font-bold text-primary mb-8">FinTrack</h1>

      <nav className="space-y-4 text-textSecondary">
        <p
          onClick={() => scrollToSection("dashboard")}
          className={linkClass("dashboard")}
        >
          Dashboard
        </p>
        <p
          onClick={() => scrollToSection("transactions")}
          className={linkClass("transactions")}
        >
          Transactions
        </p>
        <p
          onClick={() => scrollToSection("insights")}
          className={linkClass("insights")}
        >
          Insights
        </p>
      </nav>
    </div>
  );
};

export default Sidebar;
