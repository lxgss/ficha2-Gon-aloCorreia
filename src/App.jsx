import { useState } from 'react';
import Card from './cards.jsx';

const cards = [
  { name: "jett", type: "criatura", attack: 1000, defense: 1000 },
  { name: "brim", type: "criatura", attack: 2, defense: 2 },
  { name: "reyna", type: "feitiço", attack: 400, defense: 4 },
  { name: "chamber", type: "criatura", attack: 5, defense: 7 },
  { name: "sova", type: "feitiço", attack: 7, defense: 3 },
];

function App() {
  const [filter, setFilter] = useState('todas');
  const [search, setSearch] = useState('');

  const visibleCards = cards.filter((card) => {
    const matchesType = filter === 'todas' || card.type === filter;
    const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <main>
      <h1>A minha coleção</h1>
      
      <p>A mostrar {visibleCards.length} de {cards.length} cartas</p>

      <div>
        <input 
          type="text" 
          placeholder="Pesquisar por nome..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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