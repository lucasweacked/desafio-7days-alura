let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

//Exercício opcional

let estudar = prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para SIM ou 2 para NÃO.`);

if(estudar == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}