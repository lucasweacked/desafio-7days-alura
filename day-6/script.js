let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let adicionar = prompt("Deseja adicionar alguma coisa na lista de compras? Responda com 'sim' ou 'nao'.");

if (adicionar.toLowerCase() === "sim") {
    while (adicionar.toLowerCase() !== "nao") {
        if (adicionar.toLowerCase() === "sim") {
            let item = prompt("Qual comida você deseja adicionar?");
            let categoria = prompt("Qual categoria essa comida se encaixa? Temos as categorias: frutas, laticínios, congelados e doces.");
            
            if (categoria.toLowerCase() === "frutas") {
                frutas.push(item);
            } else if (categoria.toLowerCase() === "laticínios") {
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
}

if (adicionar.toLowerCase() === "nao") {
    let remover = prompt("Deseja remover algum item de sua lista? Responda com 'sim' ou 'nao'.");

    while (remover.toLowerCase() === "sim") {
        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
            alert("A lista está vazia. Não há itens para remover.");
            break;
        }

        alert(
            "Lista de compras:\n" +
            "Frutas: " + frutas + "\n" +
            "Laticínios: " + laticinios + "\n" +
            "Congelados: " + congelados + "\n" +
            "Doces: " + doces
        );

        let itemRemover = prompt("Qual item você deseja remover?");
        let removido = false;

        // função básica para remover o item de uma categoria
        function removerItem(lista, nomeCategoria) {
            let index = lista.indexOf(itemRemover);
            if (index !== -1) {
                lista.splice(index, 1);
                alert(`O item "${itemRemover}" foi removido da categoria ${nomeCategoria}.`);
                removido = true;
            }
        }

        removerItem(frutas, "frutas");
        removerItem(laticinios, "laticínios");
        removerItem(congelados, "congelados");
        removerItem(doces, "doces");

        if (!removido) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }

        remover = prompt("Deseja remover mais algum item de sua lista? Responda com 'sim' ou 'nao'.");
    }
}

alert(
    "Lista final de compras:\n" +
    "Frutas: " + frutas + "\n" +
    "Laticínios: " + laticinios + "\n" +
    "Congelados: " + congelados + "\n" +
    "Doces: " + doces
);