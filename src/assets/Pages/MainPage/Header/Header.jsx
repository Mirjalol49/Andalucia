/* eslint-disable react/no-unescaped-entities */
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-inwrapper">
            <a className="header-logo" href="./index.html">
              <h1>Andalucia</h1>
            </a>

            <nav className="header-nav">
              <a className="nav-link" href="#kurslar">
                Kurslar
              </a>
              <a className="nav-link" href="#kurslar">
                Jamoa
              </a>
              <a className="nav-link" href="#kurslar">
                Natijalar
              </a>
            </nav>
          </div>
          <div className="header-contact">
            <a href="/link">Bog'lanish</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
