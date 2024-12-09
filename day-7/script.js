let escolha;

do {
    escolha = prompt(
        "Calculadora\n" +
        "Digite 1 para somar\n" +
        "Digite 2 para subtrair\n" +
        "Digite 3 para multiplicar\n" +
        "Digite 4 para dividir\n" +
        "Digite 5 para sair"
    );

    switch (escolha) {
        case '1': {
            const [num1, num2] = Numeros();
            alert(`Resultado da soma: ${Somar(num1, num2)}`);
            break;
        }
        case '2': {
            const [num1, num2] = Numeros();
            alert(`Resultado da subtração: ${Subtrair(num1, num2)}`);
            break;
        }
        case '3': {
            const [num1, num2] = Numeros();
            alert(`Resultado da multiplicação: ${Multiplicar(num1, num2)}`);
            break;
        }
        case '4': {
            const [num1, num2] = Numeros();
            if (num2 !== 0) {
                alert(`Resultado da divisão: ${Dividir(num1, num2)}`);
            } else {
                alert("Divisão por zero não é permitida.");
            }
            break;
        }
        case '5':
            alert("Até a próxima!");
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }
} while (escolha !== '5');

function Numeros() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    return [num1, num2];
}

function Somar(num1, num2) {
    return num1 + num2;
}

function Subtrair(num1, num2) {
    return num1 - num2;
}

function Multiplicar(num1, num2) {
    return num1 * num2;
}

function Dividir(num1, num2) {
    return num1 / num2;
}