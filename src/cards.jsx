import { useState } from 'react';

function Card({ name, attack, type }) {
  const [count, setCount] = useState(0);

  return (
    <li>
      <h2>{name}</h2>
      <p>Tipo: {type}</p>
      <p>Ataque: {attack}</p>

      {attack >= 6 && <span>Forte</span>}

      <div>
        <button onClick={() => setCount(count + 1)}>
          Cliques: {count}
        </button>
      </div>
    </li>
  );
}

export default Card;