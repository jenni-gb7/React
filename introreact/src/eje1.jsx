
import { useState } from 'react';
import Profile from "./components/profile/Profile";
import MyButton from "./components/button/MyButton.jsx";
import Panel from './components/panel/Panel.jsx';
import Formulario from './components/formulario/Formulario.jsx';
import ListProductos from './components/list/ListProductos.jsx';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let content;

  if (isLoggedIn) {
    content = <Panel />;
  } else {
    content = <Formulario />;
  }

  return (
    <div>
      <h1>Bienvenido a mi aplicacion</h1>
       <MyButton />
       <Profile/>
       
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn
          ? 'Ir al Login'
          : 'Ir al Panel Administrador'}
      </button>

      {content}

      <ListProductos />
    </div>
  );
}
