import "./style.css";

function Header({ setIsLogged }) {
  return (
    <header className="header">
      <h2 className="Kenzie-h2">
        <span className="Kenzie-h2-span">Nu</span> Kenzie
      </h2>
      <button className="Kenzie-button" onClick={() => setIsLogged(false)}>
        Início
      </button>
    </header>
  );
}

export default Header;
