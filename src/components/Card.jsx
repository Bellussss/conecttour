import React from 'react';
import './Card.css';

/**
 * Componente de Card Individual
 * @param {object} lugar - O objeto contendo os dados do local
 * @param {function} onClick - Função que abre o modal
 */
export const Card = ({ lugar, onClick }) => {
  // ✅ CORREÇÃO: Extraímos os dados de dentro do objeto 'lugar'
  const { title, category, banner } = lugar;

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
      </div>
      
      <div className="card-body">
        <h3 className="card-name">{title}</h3>
        
        <button className="btn-visitar">
          Saber mais
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