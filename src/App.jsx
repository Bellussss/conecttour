import React, { useState, useMemo, useEffect } from "react";
import "./styles/App.css";

// IMPORT DO REACT-TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componentes
import LandingPage from "./components/LandingPage";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Destaques } from "./components/Destaques";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import GameModal from "./components/GameModal";
import { Footer } from "./components/Footer";

// Dados
import { lugaresData } from "./data/Lugares";

function App() {
  const [entrou, setEntrou] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [termoBusca, setTermoBusca] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState(null);

  // --- SISTEMA DE FAVORITOS (Hoisting & LocalStorage) ---
  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem("connectour_favoritos");
    return salvos ? JSON.parse(salvos) : [];
  });

  const handleToggleFavorite = (lugar) => {
    // Para evitar duplicidade de Toasts no StrictMode do React, calculamos o novo estado antes de chamar o setFavoritos e os Toasts.
    const isFav = favoritos.includes(lugar.id);
    let novaLista;

    if (isFav) {
      novaLista = favoritos.filter((id) => id !== lugar.id);
      toast.info(`Removido dos favoritos.`);
    } else {
      novaLista = [...favoritos, lugar.id];
      toast.success(`⭐ ${lugar.title} salvo nos favoritos!`);
    }

    setFavoritos(novaLista);
    localStorage.setItem("connectour_favoritos", JSON.stringify(novaLista));
  };

  const handleClearFavorites = () => {
    setFavoritos([]);
    localStorage.removeItem("connectour_favoritos");
    toast.info("🗑️ Todos os favoritos foram removidos.");
  };

  // --- FILTRO INTELIGENTE ---
  const locaisFiltrados = useMemo(() => {
    if (!lugaresData) return [];

    return lugaresData.filter((lugar) => {
      // Regra da categoria
      let bateCategoria = false;
      if (categoriaAtiva === "Todos") {
        bateCategoria = true;
      } else if (categoriaAtiva === "Meus Favoritos") {
        bateCategoria = favoritos.includes(lugar.id);
      } else {
        bateCategoria = lugar.category === categoriaAtiva;
      }

      // Regra da busca
      const bateBusca = lugar.title.toLowerCase().includes(termoBusca.toLowerCase());
      
      return bateCategoria && bateBusca;
    });
  }, [categoriaAtiva, termoBusca, favoritos]);

  if (!entrou) {
    return <LandingPage onEnter={() => setEntrou(true)} />;
  }

  return (
    <div className="app">
      <Sidebar 
        activeItem={categoriaAtiva} 
        onCategoryChange={setCategoriaAtiva} 
        favoritosCount={favoritos.length}
      />

      <main className="main-content">
        <Header userName="Visitante" status="Online" />

        <div className="content">
          {/* Só mostra destaques se não estiver buscando nada e não estiver nos favoritos */}
          {termoBusca === "" && categoriaAtiva !== "Meus Favoritos" && (
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
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                {categoriaAtiva === "Meus Favoritos" && favoritos.length > 0 && (
                  <button 
                    onClick={handleClearFavorites}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--primary)',
                      color: 'var(--primary)',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    Limpar Todos
                  </button>
                )}
                <span className="results-badge">{locaisFiltrados.length} locais</span>
              </div>
            </div>

            <div className="grid">
              {locaisFiltrados.length > 0 ? (
                locaisFiltrados.map((lugar) => (
                  <Card 
                    key={lugar.id} 
                    lugar={lugar} 
                    onClick={() => setLugarSelecionado(lugar)}
                    isFavorite={favoritos.includes(lugar.id)}
                    onToggleFavorite={() => handleToggleFavorite(lugar)}
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

      {/* COMPONENTE DO TOASTIFY */}
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;