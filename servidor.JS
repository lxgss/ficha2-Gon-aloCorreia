const express = require("express");
 
const app = express();
const PORT = 3000;
 
const cards = [
  { name: "jett", type: "Deus", attack: 1000, defense: 1000 },
  { name: "brim", type: "Criatura", attack: 2, defense: 2 },
  { name: "reyna", type: "Assassina", attack: 400, defense: 4 },
  { name: "chamber", type: "Criatura", attack: 5, defense: 7 },
  { name: "sova", type: "Mage", attack: 7, defense: 3 },
];
 
 
app.get("/", (req, res) => {
  res.send(`
    <h1>Bem-vindo à página inicial!</h1>
    <p>Temos ${cards.length} cartas disponíveis.</p>
  `);
});
 
 
app.get("/sobre", (req, res) => {
  res.send("<h1>Diogo Rodrigues TGPSI24T</h1>");
});
 
 
app.get("/cartas", (req, res) => {
  const items = cards.map(card => `<li>${card.name}</li>`).join("");
  res.send(`<h1>Cartas</h1><ul>${items}</ul><p>${cards.length} cartas disponíveis</p>`);
});
 
 
app.get("/cartas/aleatoria", (req, res) => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  res.send(`
    <h1>Carta Aleatória</h1>
    <p><strong>Nome:</strong> ${card.name}</p>
    <p><strong>Tipo:</strong> ${card.type}</p>
    <p><strong>Ataque:</strong> ${card.attack}</p>
    <p><strong>Defesa:</strong> ${card.defense}</p>
  `);
});
 
// Tarefa 5: Hora Atual
app.get("/agora", (req, res) => {
  const now = new Date().toLocaleString("pt-PT");
  res.send(now);
});
 
 
 
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 — Página Não Encontrada</h1>
    <p>O endereço pedido não existe neste servidor.</p>
  `);
});
 
app.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});