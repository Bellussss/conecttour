// import React from 'react';
// import './LandingPage.css';

// /**
//  * LandingPage - A porta de entrada do Connectour
//  * @param {Function} onEnter - Função disparada para liberar o acesso ao App
//  */
// const LandingPage = ({ onEnter }) => {
//   return (
//     <div className="landing-container">
//       {/* Background dinâmico com Blobs de luz */}
//       <div className="blob-orange" aria-hidden="true"></div>
//       <div className="blob-blue" aria-hidden="true"></div>

//       <div className="landing-content">
//         <header>
//           {/* Logo com a marca Connectour */}
//           <h1 className="logo-text">Connec<span>tour</span></h1>
//         </header>

//         <main>
//           <h2 className="hero-title">
//             Explore o melhor <br /> 
//             <span className="highlight">de Cerquilho.</span>
//           </h2>
          
//           <p className="hero-subtitle">
//             A curadoria definitiva de gastronomia, lazer e cultura. 
//             Encontre o próximo lugar que você vai amar.
//           </p>

//           <button className="enter-button" onClick={onEnter}> \\
//             Começar Experiência
//             <span className="arrow">→</span>
//           </button>
//         </main>
//       </div>

//       <footer className="landing-footer">
//         © 2026 Connectour Cerquilho • Todos os direitos reservados.
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect } from 'react';
import './LandingPage.css'; // Seu CSS conectado e tratando o visual

/**
 * LandingPage - A porta de entrada do Connectour
 * @param {Function} onEnter - Função disparada para liberar o acesso ao App
 */
const LandingPage = ({ onEnter }) => {
  const textToType = "de Cerquilho.";
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;    // Velocidade ao digitar (ms por letra)
  const deletingSpeed = 75;   // Velocidade ao apagar (ms por letra)
  const pauseTime = 3000;     // Pausa de 3 segundos com o texto cheio

  useEffect(() => {
    let timer;

    const handleType = () => {
      const fullText = textToType;
      
      // Controla a escrita ou deleção letra por letra
      setCurrentText(
        isDeleting 
          ? fullText.substring(0, currentText.length - 1) 
          : fullText.substring(0, currentText.length + 1)
      );

      let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

      // Gerencia quando parar de escrever ou quando recomeçar
      if (!isDeleting && currentText === fullText) {
        currentSpeed = pauseTime; // Pausa de 3 segundos exigida
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        currentSpeed = 500; // Pequena pausa antes de começar a digitar de novo
      }

      timer = setTimeout(handleType, currentSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting]);

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
          {/* Título com o efeito de digitação */}
          <h2 className="hero-title" style={{ minHeight: '3.5em' }}>
            Explore o melhor <br /> 
            <span className="highlight">
              {currentText}
              {/* Tracinho verde piscando na frente */}
              <span className="cursor-green">|</span>
            </span>
          </h2>
          
          <p className="hero-subtitle">
            A curadoria definitiva de gastronomia, lazer e cultura. 
            Encontre o próximo lugar que você vai amar.
          </p>

          {/* Botão com o novo efeito profissional e fluido do CSS */}
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