import React from 'react';
import './LandingPage.css';

// O onEnter é uma função que o App.jsx vai passar pra cá 
// pra gente avisar que o usuário clicou no botão de entrar
const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-container">
      {/* Essas divs são só as bolhas coloridas que ficam brilhando no fundo */}
      <div className="blob-orange"></div>
      <div className="blob-blue"></div>

      <div className="landing-content">
        <header>
          <h1 className="logo-text">Connec<span>tour</span></h1>
        </header>

        <main>
          <h2 className="hero-title">
            Explore o mundo <br /> 
            <span className="highlight">sem sair de casa.</span>
          </h2>
          <p className="hero-subtitle">
            Encontre os melhores parques, hotéis e restaurantes de Cerquilho.
          </p>

          {/* Quando clica aqui, o estado lá no App.jsx muda e libera a entrada */}
          <button className="enter-button" onClick={onEnter}>
            Começar Aventura →
          </button>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;