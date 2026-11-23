import depoimentos from '../data/depoimentos';
import DepoimentoCard from './DepoimentoCard';

function Depoimentos() {
  return (
    <section className="depoimentos">
      <h2>Quem já usa o OpenBoard</h2>
      <p>Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.</p>

      <div className="depoimentos__list">
        {depoimentos.map((dep) => (
          <DepoimentoCard
            key={dep.id}
            texto={dep.texto}
            nome={dep.nome}
            cargo={dep.cargo}
          />
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;
