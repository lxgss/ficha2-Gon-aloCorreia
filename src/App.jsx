import { useState } from 'react';
import Card from './cards.jsx';

// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).

const cards = [
  { name: "jett", type: "criatura", attack: 1000, defense: 1000 },
  { name: "brim", type: "criatura", attack: 2, defense: 2 },
  { name: "reyna", type: "feitiço", attack: 400, defense: 4 },
  { name: "chamber", type: "criatura", attack: 5, defense: 7 },
  { name: "sova", type: "feitiço", attack: 7, defense: 3 },
];

function App() {
  const [filter, setFilter] = useState('todas');

  const visibleCards = cards.filter((card) => {
    if (filter === 'todas') return true;
    return card.type === filter;
  });

  return (
    <main>
      <h1>A minha coleção</h1>
      
      <p>A mostrar {visibleCards.length} de {cards.length} cartas</p>

      <div>
        <button onClick={() => setFilter('todas')}>Todas</button>
        <button onClick={() => setFilter('criatura')}>Só criaturas</button>
        <button onClick={() => setFilter('feitiço')}>Só feitiços</button>
      </div>

      <ul>
        {visibleCards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>
    </main>
  );
}

export default App;