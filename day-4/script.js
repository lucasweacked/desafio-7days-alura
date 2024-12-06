alert("Seja bem-vindo(a) ao jogo de adivinhar o número secreto!"); 

let chute;
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let tentativas = 1;
let acertou = false;

while (chute !== numeroSecreto && tentativas <= 3) {
    chute = parseInt(prompt("Escolha um número entre 1 e 10:" + numeroSecreto));

    if (chute == numeroSecreto) {
        acertou = true;
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}.`);
        }

        tentativas++;
    }
}

if (acertou) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
} else {
    alert(`Você perdeu! O número secreto era ${numeroSecreto}. Tente novamente!`);
}