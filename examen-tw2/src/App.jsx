import Encabezado from './components/Encabezado/Encabezado';
import Bienvenida from './components/Bienvenida/Bienvenida';
import TarjetaPublicacion from './components/TarjetaPublicacion/TarjetaPublicacion';
import PiePagina from './components/PiePagina/PiePagina';


//Variables
const autor = 'Jenni Gutiérrez';
const anio = new Date().getFullYear();

//Arreglo de publicaciones
const publicaciones = [
  {
    id: 1,
    imagen: 'https://i.pinimg.com/736x/a9/b0/d9/a9b0d93103b3e5884a462ef3748e83e9.jpg',
    titulo: 'Una nueva forma de experimentar la música',
    categoria: 'NSQK',
    destacada: true
  },
  {
    id: 2,
    imagen: 'https://i.pinimg.com/736x/02/77/53/0277535ffe60259439b889deb00e9931.jpg',
    titulo: 'Entre nostalgia, romance y experimentación',
    categoria: 'Álvaro Díaz',
    destacada: false
  },
  {
    id: 3,
    imagen: 'https://i.pinimg.com/736x/88/7b/f6/887bf6300c50ae964d59ac872d98d690.jpg',
    titulo: 'Canciones que se sienten como recuerdos',
    categoria: 'Latin Mafia',
    destacada: false
  }
];

export default function App() {
  return (
    <div className="w-100 min-vh-100 m-0 p-0 bg-light">

      <Encabezado autor={autor} />

      <Bienvenida />

      <section className="w-100 px-4 py-5" id="publicaciones">

        <h2 className="mb-4 fw-bold">
          Publicaciones
        </h2>

        {publicaciones.length > 0 ? (

          <div className="row g-4">

            {publicaciones.map(publicacion => (
              <div className="col-md-4" key={publicacion.id}>

                <TarjetaPublicacion
                  imagen={publicacion.imagen}
                  titulo={publicacion.titulo}
                  categoria={publicacion.categoria}
                  destacada={publicacion.destacada}
                />

              </div>
            ))}

          </div>

        ) : (

          <p>No hay publicaciones</p>

        )}

      </section>

      <PiePagina autor={autor} anio={anio} />

    </div>
  );
}