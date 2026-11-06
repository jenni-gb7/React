import { useState, useEffect } from 'react';
//import "../style/child.css";
export default function Child(){
const [counter, setCounter] = useState(0);

useEffect(() =>{
    console.log("El componente se ha montado");
});

return (
    <div className="child">
    <h2>Este es un componente hijo</h2>
    <h3>[counter]</h3>
    <button onClick={() => setCounter(counter +1)}></button>
    </div>
)
}
