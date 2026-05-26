import React from 'react';
import './LandingPage.css';

/**
 * LandingPage - A porta de entrada do Connectour
 * @param {Function} onEnter - Função disparada para liberar o acesso ao App
 */
const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-container">
      {/* Background dinâmico com Blobs de luz */}
      <div className="blob-orange" aria-hidden="true"></div>
      <div className="blob-blue" aria-hidden="true"></div>

      <div className="landing-content">
        <header>
          {/* Logo com a marca Connectour */}
          <h1 className="logo-text">Connec<span>tour</span></h1>
        </header>

        <main>
          <h2 className="hero-title">
            Explore o melhor <br /> 
            <span className="highlight">de Cerquilho.</span>
          </h2>
          
          <p className="hero-subtitle">
            A curadoria definitiva de gastronomia, lazer e cultura. 
            Encontre o próximo lugar que você vai amar.
          </p>

          <button className="enter-button" onClick={onEnter}>
            Começar Experiência
            <span className="arrow">→</span>
          </button>
        </main>
      </div>

      <footer className="landing-footer">
        © 2026 Connectour Cerquilho • Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default LandingPage;