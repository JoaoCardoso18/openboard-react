import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/" className="logo">OpenBoard</Link>
      </h1>
      <div className="header__acoes">
        <Link to="/">Entrar</Link>
        <Link to="/publicar" className="btn">Publicar vaga</Link>
      </div>
    </header>
  );
}

export default Header;
