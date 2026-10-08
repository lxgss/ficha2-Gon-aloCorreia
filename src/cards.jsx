function Card({name, attack, type}){
    return(
        <li>
 
      <h2>{name}</h2>
      <p>Tipo: {type}</p>
      <p>Ataque: {attack}</p>
 
      {attack >= 15 && <span>Forte</span>}
 
        </li>
    );
}
export default Card;
 