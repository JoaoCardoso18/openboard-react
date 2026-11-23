import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { buscarVagas } from '../services/vagasService';
import Hero from '../components/Hero';
import Vagas from '../components/Vagas';
import News from '../components/News';
import Depoimentos from '../components/Depoimentos';

function HomePage() {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregar() {
      try {
        setVagas(await buscarVagas());
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  return (
    <>
      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
      >
        <Link to="/publicar" className="btn">Publicar vaga</Link>
      </Hero>

      <main className="conteudo">
        {loading ? (
          <p className="status">Carregando vagas...</p>
        ) : erro ? (
          <p className="status erro">{erro}</p>
        ) : (
          <Vagas vagas={vagas} />
        )}
      </main>

      <News />
      <Depoimentos />
    </>
  );
}

export default HomePage;
