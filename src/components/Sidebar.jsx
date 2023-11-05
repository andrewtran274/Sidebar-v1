import React, { useState } from "react";
import logo from "../assets/geeks-ui.svg";

// const navItems = ["Home", "Settings", "Backup", "Mail", "Cloud", "Layers"];

const navItems = [
  {
    name: "Home",
    icon: <i className="fa-solid fa-house-chimney"></i>,
  },
  {
    name: "Settings",
    icon: <i className="fa-solid fa-gear"></i>,
  },
  {
    name: "Backup",
    icon: <i className="fa-solid fa-cloud-arrow-up"></i>,
  },
  {
    name: "Mail",
    icon: <i className="fa-solid fa-envelope"></i>,
  },
  {
    name: "Cloud",
    icon: <i className="fa-solid fa-cloud"></i>,
  },
  {
    name: "Layers",
    icon: <i className="fa-solid fa-layer-group"></i>,
  },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined toggle-menu">
              {isOpen ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </span>
          </button>
          <img src={logo} className="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item} type="button" className="sidebar-button">
              <span className="material-symbols-outlined">{item.icon}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
