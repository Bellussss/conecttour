import React from "react";
import "./Header.css";

export function Header({ userName = "Visitante", status = "Online" }) {
  // Pegamos a inicial para o Avatar
  const initial = userName.charAt(0).toUpperCase();

  return (
    <header className="header">
      <div className="header-left">
        {/* Avatar dinâmico */}
        <div className="user-avatar">{initial}</div>
        
        <div className="user-info">
          <h3 className="header-greeting">
            Bem-vindo, <span className="highlight">{userName}</span>
          </h3>
          
          <div className="status-container">
            {/* A classe muda conforme o status (online/offline) */}
            <span className={`status-dot ${status.toLowerCase()}`}></span>
            <span className="status-text">{status}</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="location-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Cerquilho, SP
        </div>
      </div>
    </header>
  );
}