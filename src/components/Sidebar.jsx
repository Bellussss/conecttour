import React from "react";
import "./Sidebar.css";

export function Sidebar({ activeItem, onCategoryChange }) { // Recebe funções via props
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
              onClick={() => onCategoryChange(item.name)} // <--- Dispara a mudança
              style={{ cursor: 'pointer' }} // Garante que o usuário saiba que é clicável
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