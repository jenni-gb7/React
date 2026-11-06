export default function TarjetaPublicacion({
  imagen,
  titulo,
  categoria,
  destacada
}) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={imagen}
        className="card-img-top"
        alt={titulo}
      />

      <div className="card-body">

        {destacada && (
          <span className="badge bg-danger mb-2">
            Destacada
          </span>
        )}

        <p className="text-danger fw-bold small mb-2">
          {categoria}
        </p>

        <h5 className="card-title">
          {titulo}
        </h5>

        <a href="#contacto" className="text-danger text-decoration-none">
          Leer artículo →
        </a>

      </div>

    </div>
  );
}