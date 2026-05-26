import React from "react";
import "./Sidebar.css";

/**
 * Sidebar - Navegação Lateral
 * @param {string} activeItem - Categoria selecionada no momento
 * @param {function} onCategoryChange - Função que filtra os cards no App.jsx
 */
export function Sidebar({ activeItem, onCategoryChange }) {
  const menuItems = [
    { name: "Destinos", icon: "🏖️" },
    { name: "Restaurantes", icon: "🍴" },
    { name: "Hotéis", icon: "🏨" },
    { name: "Lazer", icon: "🎢" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">
          Connec<span>tour</span>
        </h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li 
              key={item.name} 
              // A classe "active" aplica o brilho verde e a borda que definimos no CSS
              className={`nav-item ${activeItem === item.name ? "active" : ""}`}
              onClick={() => onCategoryChange(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p>CERQUILHO • SP</p>
        <p>V. 2.0.4</p>
      </div>
    </aside>
  );
}