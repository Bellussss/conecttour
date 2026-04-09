import React from "react";
import "./Card.css";

// Definindo o componente Card
export function Card({ title, category, banner }) {
  // Fallbacks: se a imagem não existir, usamos um placeholder
  // 
const imageSrc = banner || "https://via.placeholder.com/300x180?text=Sem+Imagem";

  return (
    <article className="card">
      <figure className="card-header">
        <img 
          src={imageSrc} 
          alt={`Capa do conteúdo: ${title}`} 
          className="card-img" 
        />
      </figure>
      
      <div className="card-info">
        <span className="card-category">{category || "Geral"}</span>
        <h4 className="card-title">{title || "Título Indisponível"}</h4>
        
        <button 
          className="visit-btn" 
          onClick={() => console.log(`Visitando: ${title}`)}
        >
          Visitar
        </button>
      </div>
    </article>
  );
}