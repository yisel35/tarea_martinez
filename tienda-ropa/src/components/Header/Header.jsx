import "./Header.module.css";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>Tienda Ropa</h1>
        </Link>
      </div>

      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <CartWidget />
    </header>
  );
};
