import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import LandingPage from "./components/LandingPage";
import GameModal from "./components/GameModal"; // Importando o modal que você criou
import { lugaresData } from "./data/Lugares";
import "./styles/App.css";

function App() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Destinos");
  const [logado, setLogado] = useState(false);
  
  // NOVO ESTADO: Armazena o objeto do lugar selecionado para o modal
  const [modalAberto, setModalAberto] = useState(null);

  const lugaresFiltrados = lugaresData.filter((lugar) => {
    const bateBusca = lugar.title.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = lugar.category === categoriaAtiva;
    return bateBusca && bateCategoria;
  });

  if (!logado) {
    return <LandingPage onEnter={() => setLogado(true)} />;
  }

  return (
    <div className="app">
      <Sidebar 
        activeItem={categoriaAtiva} 
        onCategoryChange={setCategoriaAtiva} 
      />

      <main className="main-content">
        <Header userName="Visitante" status="Online" />
        
        <div className="content">
          <header className="content-header">
            <h2 className="section-title">{categoriaAtiva} Recentes</h2>
            <SearchBar onSearch={setBusca} />
          </header>

          <section className="grid">
            {lugaresFiltrados.length > 0 ? (
              lugaresFiltrados.map((lugar) => (
                <Card
                  key={lugar.id}
                  title={lugar.title}
                  category={lugar.category}
                  banner={lugar.banner}
                  // PASSO 1: Adicionamos o clique para abrir o modal
                  onClick={() => setModalAberto(lugar)} 
                />
              ))
            ) : (
              <p className="no-results">Nada encontrado aqui, mestre! 😅</p>
            )}
          </section>
        </div>
      </main>

      {/* PASSO 2: Renderização do Modal */}
      {modalAberto && (
        <GameModal 
          jogo={modalAberto} 
          fechar={() => setModalAberto(null)} 
        />
      )}
    </div>
  );
}

export default App;