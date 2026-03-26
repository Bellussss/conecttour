import { Sidebar } from "./components/Sidebar"; // Ajustado para exportação nomeada { Sidebar }
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { lugaresData } from "./data/Lugares";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar fixo na lateral */}
      <Sidebar />

      <main className="main-content">
        {/* Header no topo do conteúdo principal */}
        <Header userName="Visitante" status="Online" />
        
        <div className="content">
          <header className="content-header">
            <h2 className="section-title">Lugares Recentes</h2>
          </header>

          <section className="grid">
            {/* Renderização dinâmica dos cards */}
            {lugaresData.map((lugar) => (
              <Card
                key={lugar.id} // Chave única essencial para a performance do React
                title={lugar.title}
                category={lugar.category}
                banner={lugar.banner}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;