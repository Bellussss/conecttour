import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import { lugaresData } from "./data/Lugares";
import "./styles/App.css";

function App() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Destinos"); // Estado inicial

  // Lógica de Filtro Duplo: Categoria + Busca
  const lugaresFiltrados = lugaresData.filter((lugar) => {
    const bateBusca = lugar.title.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = lugar.category === categoriaAtiva;
    
    return bateBusca && bateCategoria;
  });

  return (
    <div className="app">
      {/* Passamos o estado e a função de atualizar para a Sidebar */}
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
              <p className="no-results">Nenhum item em "{categoriaAtiva}" corresponde à sua busca.</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;