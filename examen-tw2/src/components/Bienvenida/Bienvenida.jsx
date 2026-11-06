export default function Bienvenida() {
  return (
    <section className="row align-items-center g-0 w-100 m-0 py-5" id="inicio">

      <div className="col-md-6 px-4">

        <h1 className="display-4 fw-bold">
          Bajo el volumen.
        </h1>

        <p className="lead">
          Un espacio dedicado a descubrir y explorar la música alternativa y urbana en español. Desde nuevos sonidos y propuestas musicales hasta canciones que conectan con nuestras emociones, recuerdos y experiencias.
        </p>

        <a href="#publicaciones" className="btn btn-danger">
          Explorar el blog →
        </a>

      </div>

      <div className="col-md-6">

        <img
          src="https://i.pinimg.com/736x/72/6d/73/726d73795f4133bcc1b975db82520535.jpg"
          alt="Paisaje de montañas"
          className="img-fluid w-100 rounded-0"
        />

      </div>

    </section>
  );
}