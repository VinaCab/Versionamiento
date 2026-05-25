import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>

      <Link to="/">Inicio</Link> | {" "}

      <Link to="/clientes">Clientes</Link> | {" "}

      <Link to="/dashboard">Dashboard</Link> | {" "}

      <Link to="/reportes">Reportes</Link>

    </nav>
  );
}

export default Navbar;