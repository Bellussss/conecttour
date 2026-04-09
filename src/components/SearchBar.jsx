import React from "react";
import "./SearchBar.css";

export function SearchBar({ onSearch }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Para onde você quer ir?"
          className="search-input"
          onChange={(e) => onSearch(e.target.value)} // Envia o texto em tempo real
        />
      </div>
    </div>
  );
}