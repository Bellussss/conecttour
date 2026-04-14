import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import LandingPage from "./components/LandingPage"; // Importando a tela nova
import { lugaresData } from "./data/Lugares";
import "./styles/App.css";

function App() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Destinos");
  
  // ESTADO CHAVE: Começa como 'false' para mostrar a Landing Page primeiro
  const [logado, setLogado] = useState(false);

  // Filtra a lista baseada na categoria da sidebar e no que foi digitado na busca
  const lugaresFiltrados = lugaresData.filter((lugar) => {
    const bateBusca = lugar.title.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = lugar.category === categoriaAtiva;
    return bateBusca && bateCategoria;
  });

  // SE NÃO TIVER LOGADO, retorna apenas a Landing Page
  if (!logado) {
    return <LandingPage onEnter={() => setLogado(true)} />;
  }

  // SE TIVER LOGADO (após clicar no botão), mostra o app real
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
                />
              ))
            ) : (
              <p className="no-results">Nada encontrado aqui, mestre! 😅</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;