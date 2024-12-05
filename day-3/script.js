/* 1 */
let area = prompt("Deseja seguir na área de Front-End (digite 1) ou seguir na área de Back-End (digite 2)?");

/* 2 */
if (area == 1) {
    let frontEnd = prompt("Ótimo! Gostaria de aprender React (digite 1) ou aprender Vue (digite 2)?");

    if (frontEnd == 1) {
        alert("React é uma excelente escolha!");
    } else if (frontEnd == 2) {
        alert("Vue é uma excelente escolha!");
    } else {
        alert("Opção inválida. Por favor, escolha React (1) ou Vue (2).");
    }
} else if (area == 2) {
    let backEnd = prompt("Ótimo! Gostaria de aprender C# (digite 1) ou aprender Java (digite 2)?");

    if (backEnd == 1) {
        alert("C# é uma excelente escolha!");
    } else if (backEnd == 2) {
        alert("Java é uma excelente escolha!");
    } else {
        alert("Opção inválida. Por favor, escolha C# (1) ou Java (2).");
    }
} else {
    alert("Opção inválida. Por favor, escolha 1 para Front-End ou 2 para Back-End.");
}

/* 3 */
let espec = prompt(
    "Você prefere seguir se especializando na área escolhida (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?"
);

if (espec == 1) {
    alert("Especializar-se é sempre uma ótima escolha para se aprofundar na sua área.");
} else if (espec == 2) {
    alert("Tornar-se Fullstack é incrível para ampliar suas possibilidades.");
} else {
    alert("Opção inválida. Por favor, escolha 1 para especialização ou 2 para Fullstack.");
}

/* 4
Decidi usar 'while' porque ele permite executar repetidamente um bloco de código enquanto uma condição for verdadeira. 
Como o número de tecnologias que o usuário pode querer inserir é desconhecido, o 'while' é a escolha ideal, 
porque garante que o loop continue até que o usuário decida parar
*/
let maisTec = true;

while (maisTec) {
    let tec = prompt("Quais tecnologias você gostaria de aprender?");

    alert(`Muito legal! ${tec} é uma ótima tecnologia para se aprender!`);

    let continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para continuar ou qualquer outra tecla para sair.");

    if (continuar !== "ok") {
        maisTec = false;
    }
}