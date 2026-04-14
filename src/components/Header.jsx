import React from "react";
import "./Header.css";

// Adicionamos props para tornar o Header dinâmico
export function Header({ userName = "Visitante", status = "Online" }) {
  return (
    <header className="header">
      <div className="user-info">
        {/* Usamos template literals ou chaves para exibir as variáveis */}
        <h3 className="header-greeting">
          Bem-vindo, <span className="highlight">{userName}</span>
        </h3>
        
        <div className="status-container">
          {/* Uma pequena melhoria visual: um indicador de status */}
          <span className={`status-dot ${status.toLowerCase()}`}></span>
        </div>
      </div>
    </header>
  );
}