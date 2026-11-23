import { Link } from 'react-router';

function Footer() {
  return (
    <footer>
      <p>
        <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
      </p>

      <nav>
        <Link to="/">Entrar</Link>
        <Link to="/publicar">Publicar vaga</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Privacidade</Link>
      </nav>
    </footer>
  );
}

export default Footer;
