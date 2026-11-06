import Profile from './Profile.jsx';

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>

      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="física y química"
        awards={[
          'Premio Nobel de Física',
          'Premio Nobel de Química',
          'Medalla Davy',
          'Medalla Matteucci'
        ]}
        discovery="polonio (elemento químico)"
      />

      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geoquímica"
        awards={[
          'Premio Miyake de geoquímica',
          'Premio Tanaka'
        ]}
        discovery="un método para medir el dióxido de carbono en el agua de mar"
      />
    </div>
  );
}