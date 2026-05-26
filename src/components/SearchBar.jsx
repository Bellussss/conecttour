import React from "react";
import "./SearchBar.css";

/**
 * SearchBar - O filtro inteligente do Connectour
 * @param {string} searchTerm - O valor vindo do estado do App.jsx
 * @param {function} onSearch - Função que filtra a lista de lugares
 */
export function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-container">
      <div className="search-box">
        {/* Ícone moderno em SVG */}
        <svg 
          className="search-icon-svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          type="text"
          value={searchTerm}
          placeholder="O que você está procurando em Cerquilho?"
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
          spellCheck="false"
        />

        {/* Botão para limpar a busca rapidamente */}
        {searchTerm && (
          <button 
            className="clear-button" 
            onClick={() => onSearch("")}
            title="Limpar busca"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}