let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let adicionar = prompt("Deseja adicionar alguma coisa na lista de compras? Responda com 'sim' ou 'nao'.");

while (adicionar.toLowerCase() !== "nao") {
    if (adicionar.toLowerCase() === "sim") {
        let item = prompt("Qual comida você deseja adicionar?");
        let categoria = prompt("Qual categoria essa comida se encaixa? Temos as categorias: frutas, laticínios, congelados e doces.");
        
        if (categoria.toLowerCase() === "frutas") {
            frutas.push(item);
        } else if (categoria.toLowerCase() === "laticinios") {
            laticinios.push(item);
        } else if (categoria.toLowerCase() === "congelados") {
            congelados.push(item);
        } else if (categoria.toLowerCase() === "doces") {
            doces.push(item);
        } else {
            alert("Categoria inválida! Tente novamente.");
        }
    } else {
        alert("Resposta inválida. Por favor, responda com 'sim' ou 'nao'.");
    }
    adicionar = prompt("Deseja adicionar mais alguma coisa na lista de compras? Responda com 'sim' ou 'nao'.");
}

alert(
    "Lista de compras:\n" +
    "Frutas: " + frutas + "\n" +
    "Laticínios: " + laticinios + "\n" +
    "Congelados: " + congelados + "\n" +
    "Doces: " + doces
);