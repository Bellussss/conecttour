import React from "react";
import { toast } from "react-toastify";
import "./Footer.css";

export function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContato = (e) => {
    e.preventDefault();
    toast.info("📱 Redirecionando para o WhatsApp do Connectour...");
  };

  const handleSocial = (network) => {
    toast.success(`Abrindo ${network}...`);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2 className="footer-logo">Connec<span>tour</span></h2>
          <p>Explorando o melhor de Cerquilho, SP.</p>
          <div className="social-links">
            <span className="social-icon" onClick={() => handleSocial('Instagram')}>IG</span>
            <span className="social-icon" onClick={() => handleSocial('Facebook')}>FB</span>
            <span className="social-icon" onClick={() => handleSocial('YouTube')}>YT</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Explorar</h3>
          <ul>
            <li><a href="#inicio" onClick={scrollToTop}>Início</a></li>
            <li><a href="#contato" onClick={handleContato}>Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Integrantes</h3>
          <ul>
            <li>Gustavo Casagrande Kha'zix</li>
            <li>Otavio Bellucci</li>
            <li>Matheus Henrique Rozante</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Connectour. Todos os direitos reservados.</p>
        <p className="made-by">Desenvolvido com ❤️ para Cerquilho</p>
      </div>
    </footer>
  );
}