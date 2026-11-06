
import "../../styles/Profile.css";

const user = {
  name: 'V',
  imageUrl: 'https://i.pinimg.com/736x/5e/02/70/5e0270b4e074d40d41da0c0606c22440.jpg',
  imageSize: 150,
};

export default function Profile() {
  return (
    <>
      <h1 style={styles.h1}>{user.name}</h1>

      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={styles.img}
      />
    </>
  );
}

const styles = {
  img: {
    width: user.imageSize,
    height: user.imageSize,
    border: 'solid 15px',
    borderColor: 'rgb(116, 113, 113)',
  },
  h1: {
    color: 'rgb(4, 2, 96)',
  },
};
