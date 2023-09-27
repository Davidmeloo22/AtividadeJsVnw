const cadastro = [
  {
    nome: "Bolsonaro",
    idade: 25,
    telefone: "00 0000 000",
    amigos: ["João", "maria", "leonardo", "josé"],
  },
  {
    nome: "Lula",
    idade: 25,
    telefone: "00 0000 000",
    amigos: ["João", "maria", "leonardo", "josé"],
  },
  {
    nome: "Marina",
    idade: 25,
    telefone: "00 0000 000",
    amigos: ["João", "maria", "leonardo", "josé"],
  },
  {
    nome: "Cabo Daciolo",
    idade: 25,
    telefone: "00 0000 000",
    amigos: ["João", "maria", "leonardo", "josé"],
  },
  {
    nome: "Meireles",
    idade: 25,
    telefone: "00 0000 000",
    amigos: ["João", "maria", "leonardo", "josé"],
  },
];

for (let i = 0; i < cadastro.length; i++) {
  const primeiroAmigo = cadastro[i].amigos[0];
  console.log(`Amigo de ${cadastro[i].nome}: ${primeiroAmigo}`);
}
