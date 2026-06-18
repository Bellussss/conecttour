import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Card.css';

/**
 * Componente de Card Individual
 * @param {object} lugar - O objeto contendo os dados do local
 * @param {function} onClick - Função que abre o modal
 * @param {boolean} isFavorite - Se o card está favoritado
 * @param {function} onToggleFavorite - Função que inverte o favorito
 */
export const Card = ({ lugar, onClick, isFavorite, onToggleFavorite }) => {
  const { title, category, banner } = lugar;
  
  const [btnText, setBtnText] = useState("Visitar");

  const handleFavorite = (e) => {
    e.stopPropagation(); // Evita que o card principal seja clicado
    onToggleFavorite(); // Chama a função que vem do App.jsx
  };

  const handleVisit = (e) => {
    e.stopPropagation(); // Evita que o card principal seja clicado
    setBtnText("BORAAA! 🚀");
    toast.success(`🚀 Partindo para ${title}!`);
    
    setTimeout(() => {
      setBtnText("Visitar");
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + " Cerquilho")}`, "_blank");
    }, 500);
  };

  return (
    <article className="card-container" onClick={onClick}>
      <div className="card-image-wrapper">
        <img 
          src={banner} 
          alt={`Imagem de ${title}`} 
          className="card-img" 
          loading="lazy" 
        />
        <div className="card-tag">{category}</div>
        
        {/* Botão de Favoritar posicionado na imagem */}
        <button 
          className="btn-favorite" 
          onClick={handleFavorite}
          title="Favoritar"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      
      <div className="card-body">
        <h3 className="card-name">{title}</h3>
        
        <button className="btn-visitar" onClick={handleVisit}>
          {btnText}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  );
};