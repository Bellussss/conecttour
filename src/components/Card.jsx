import React, { useState } from 'react';
import './Card.css';

export const Card = ({ title, category, banner }) => {
  // Esse estado serve pra gente saber se o cara clicou e mudar a cor do botão
  const [clicado, setClicado] = useState(false);

  const handleVisitar = () => {
    setClicado(true);
    
    // Cria o link do Google Maps com o nome do lugar
    const busca = encodeURIComponent(`${title} Cerquilho`);
    const url = `https://www.google.com/maps/search/${busca}`;
    
    // Espera meio segundo (só pro cara ver o efeito do botão) e abre o mapa
    setTimeout(() => {
      window.open(url, '_blank');
      setClicado(false); // Volta o botão ao normal depois
    }, 500);
  };

  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        <img src={banner} alt={title} className="card-img" />
        <div className="card-tag">{category}</div>
      </div>
      
      <div className="card-body">
        <h3 className="card-name">{title}</h3>
        {/* Se o estado 'clicado' for true, ele ganha a classe 'btn-active' */}
        <button 
          onClick={handleVisitar}
          className={`btn-visitar ${clicado ? 'btn-active' : ''}`}
        >
          {clicado ? 'BORAAA! 🚀' : 'Visitar'}
        </button>
      </div>
    </div>
  );
};