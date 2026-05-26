import React, { useState, useMemo } from "react";
import "./styles/App.css";

// Componentes
import LandingPage from "./components/LandingPage";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Destaques } from "./components/Destaques";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import GameModal from "./components/GameModal";
import { Footer } from "./components/Footer";

// ✅ CORREÇÃO: O nome aqui precisa ser o mesmo que você usa lá embaixo
import { lugaresData } from "./data/Lugares";

function App() {
  const [entrou, setEntrou] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos"); // Começar em "Todos" é mais seguro
  const [termoBusca, setTermoBusca] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState(null);

  // Filtro Inteligente
  const locaisFiltrados = useMemo(() => {
    // Verificamos se lugaresData existe antes de filtrar para evitar erro
    if (!lugaresData) return [];

    return lugaresData.filter((lugar) => {
      const bateCategoria = categoriaAtiva === "Todos" || lugar.category === categoriaAtiva;
      const bateBusca = lugar.title.toLowerCase().includes(termoBusca.toLowerCase());
      return bateCategoria && bateBusca;
    });
  }, [categoriaAtiva, termoBusca]);

  if (!entrou) {
    return <LandingPage onEnter={() => setEntrou(true)} />;
  }

  return (
    <div className="app">
      <Sidebar activeItem={categoriaAtiva} onCategoryChange={setCategoriaAtiva} />

      <main className="main-content">
        <Header userName="Visitante" status="Online" />

        <div className="content">
          {/* Só mostra destaques se não estiver buscando nada */}
          {termoBusca === "" && (
             <section className="section-group">
               <h2 className="section-title">Principais Destaques</h2>
               <Destaques lugares={lugaresData} onSelect={setLugarSelecionado} />
             </section>
          )}

          <div className="search-filter-row">
            <SearchBar searchTerm={termoBusca} onSearch={setTermoBusca} />
          </div>

          <section className="section-group">
            <div className="content-header">
              <h2 className="section-title">
                {categoriaAtiva === "Todos" ? "Explorar Cerquilho" : categoriaAtiva}
              </h2>
              <span className="results-badge">{locaisFiltrados.length} locais</span>
            </div>

            <div className="grid">
              {locaisFiltrados.length > 0 ? (
                locaisFiltrados.map((lugar) => (
                  <Card 
                    key={lugar.id} 
                    lugar={lugar} 
                    onClick={() => setLugarSelecionado(lugar)} 
                  />
                ))
              ) : (
                <div className="no-results">
                  <p>Ops! Nenhum local encontrado.</p>
                </div>
              )}
            </div>
          </section>
        </div>

        <Footer />
      </main>

      {lugarSelecionado && (
        <GameModal 
          jogo={lugarSelecionado} 
          fechar={() => setLugarSelecionado(null)} 
        />
      )}
    </div>
  );
}

export default App;