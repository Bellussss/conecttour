import React, { useEffect } from 'react';
import '../styles/GameModal.css';

export default function GameModal({ fechar, jogo }) {
  // Fecha o modal ao apertar a tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') fechar();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [fechar]);

  if (!jogo) return null;

  const handleIrParaMaps = () => {
    const busca = encodeURIComponent(`${jogo.title} Cerquilho SP`);
    // Link corrigido para abrir a busca oficial do Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${busca}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <img src={jogo.banner} alt={jogo.title} className="modal-banner" />
          <div className="header-overlay" />
          <button className="close-x" onClick={fechar} title="Fechar">×</button>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="badge-categoria">{jogo.category}</span>
            <span className="modal-status">Aberto agora</span>
          </div>
          
          <h2 className="modal-titulo">{jogo.title}</h2>
          <p className="modal-descricao">
            {jogo.description || "Conheça este lugar incrível em Cerquilho! Clique abaixo para ver como chegar e conferir as avaliações completas."}
          </p>
          
          <div className="modal-footer-btns">
            <button className="btn-principal" onClick={handleIrParaMaps}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Ver no Google Maps
            </button>
            <button className="btn-secundario" onClick={fechar}>
              Talvez depois
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}