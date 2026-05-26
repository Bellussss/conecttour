import React from "react";
import "./Footer.css";
// Se estiver usando react-icons, pode importar ícones aqui
// import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2 className="footer-logo">Connec<span>tour</span></h2>
          <p>Explorando o melhor de Cerquilho, SP.</p>
          <div className="social-links">
            {/* Espaço para ícones sociais futuramente */}
            <span className="social-icon">IG</span>
            <span className="social-icon">FB</span>
            <span className="social-icon">YT</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Explorar</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#contato">Contato</a></li>
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