export default function Encabezado({ autor }) {
  return (
    <header>
      <nav className="navbar w-100 px-4 py-3 d-flex justify-content-between">

        <a className="navbar-brand text-dark fw-bold" href="#">
          {autor}
        </a>

        <div className="d-flex gap-4">
          <a className="nav-link text-dark" href="#">Inicio</a>
          <a className="nav-link text-dark" href="#">Sobre mí</a>
          <a className="nav-link text-dark" href="#">Blog</a>
          <a className="nav-link text-dark" href="#">Contacto</a>
        </div>

      </nav>
    </header>
  );
}