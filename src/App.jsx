
import Card from './cards.jsx';

// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).

const cards = [
  { name: "jett", type: "Diospiro", attack: 1000, defense: 1000 },
  { name: "brim", type: "Mirtilo", attack: 2, defense: 2 },
  { name: "reyna", type: "Pera", attack: 400, defense: 4 },
  { name: "chamber", type: "Banana", attack: 5, defense: 7 },
  { name: "sova", type: "Manga", attack: 7, defense: 3 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <p>Tenho {cards.length} cartas</p>

      <ul>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>
    </main>
  );
}

export default App;
