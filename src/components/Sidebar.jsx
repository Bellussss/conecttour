import React from "react";
import "./Sidebar.css";

/**
 * Sidebar - Navegação Lateral com Efeito Premium no Logo
 * @param {string} activeItem - Categoria selecionada no momento
 * @param {function} onCategoryChange - Função que filtra os cards no App.jsx
 * @param {number} favoritosCount - Total de favoritos salvos
 */
export function Sidebar({ activeItem, onCategoryChange, favoritosCount }) {
  const menuItems = [
    { name: "Destinos" },
    { name: "Restaurantes" },
    { name: "Hotéis" },
    { name: "Lazer" },
    { name: "Meus Favoritos" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {/* Estrutura modificada para permitir o efeito de espalhar as letras no hover */}
        <h2 className="logo premium-hover">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>n</span>
          <span>e</span>
          <span>c</span>
          <span className="brand-highlight">t</span>
          <span className="brand-highlight">o</span>
          <span className="brand-highlight">u</span>
          <span className="brand-highlight">r</span>
        </h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li 
              key={item.name} 
              // A classe "active" aplica o brilho verde e a borda definidos no CSS
              className={`nav-item ${activeItem === item.name ? "active" : ""}`}
              onClick={() => onCategoryChange(item.name)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </div>
              {item.name === "Meus Favoritos" && favoritosCount > 0 && (
                <span style={{
                  background: 'var(--primary)',
                  color: '#050505',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {favoritosCount}
                </span>
              )}
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