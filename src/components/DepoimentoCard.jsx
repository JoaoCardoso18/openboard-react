function DepoimentoCard({ texto, nome, cargo }) {
  return (
    <div className="depoimento">
      <p>{texto}</p>
      <p className="depoimento__nome">{nome}</p>
      <span>{cargo}</span>
    </div>
  );
}

export default DepoimentoCard;
