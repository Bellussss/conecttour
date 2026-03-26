import React from "react";
import "./Sidebar.css";

// Adicionamos a prop 'activeItem' para que você possa controlar qual aba está selecionada
export function Sidebar({ activeItem = "Destinos" }) {
  
  // Lista de itens para evitar repetição de código (DRY - Don't Repeat Yourself)
  const menuItems = [
    { name: "Destinos", icon: "🏖️" },
    { name: "Restaurantes", icon: "🍴" },
    { name: "Hotéis", icon: "🏨" },
    { name: "Lazer", icon: "🎢" },
  ];

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h2 className="logo">Conecttour</h2>
      </header>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li 
              key={item.name} 
              className={`nav-item ${activeItem === item.name ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}