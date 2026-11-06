
export default function Item({ name, isPacked}) {
    return (
        //Operador AND
  <li className="item">

    {name} {isPacked &&' ✅'} 
  </li>
);
//isPacked es true
//if(isPacked){
     //return null;
 //return <li className="item">{name} ✅</li>;

 //Devolucion de nada con null
 //Del para tacharlo, return (<li className="item"> {isPacked ? (<del> {name + ' ✅'}</del>): (name)}</li>

}
  
