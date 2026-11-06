export default function PiePagina({ autor, anio }) {
  return (
    <footer className="bg-white text-center p-3 w-100">

      <p className="text-dark">
        {autor} · {anio}
      </p>

    </footer>
  );
}