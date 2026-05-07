import '../styles/GameModal.css';

export default function GameModal({ fechar, jogo }) {
  if (!jogo) return null;

  const handleIrParaMaps = () => {
    const busca = encodeURIComponent(`${jogo.title} Cerquilho`);
    const url = `https://www.google.com/maps/search/?api=1&query=${busca}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <img src={jogo.banner} alt={jogo.title} className="modal-banner" />
          <button className="close-x" onClick={fechar}>&times;</button>
        </div>

        <div className="modal-body">
          <span className="badge-categoria">{jogo.category}</span>
          <h2 className="modal-titulo">{jogo.title}</h2>
          <p className="modal-descricao">{jogo.description}</p>
          
          <div className="modal-footer">
            <button className="btn-principal" onClick={handleIrParaMaps}>
              Ver localização no Maps
            </button>
            <button className="btn-secundario" onClick={fechar}>
              Talvez depois
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}