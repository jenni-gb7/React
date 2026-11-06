import Card from './Card.jsx';

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Foto</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>Información</h1>
        <p>Aklilu Lemma fue un destacado científico etíope que descubrió un tratamiento natural para la esquistosomiasis.</p>
      </Card>
    </div>
  );
}
