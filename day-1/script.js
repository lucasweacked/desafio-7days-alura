let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

/* 
  Comparação usando "==":
  O "==" compara os valores, mas ele converte os tipos das variáveis quando precisa.
  Então, quando comparamos "numeroUm" (que é um número) com "stringUm" (que é uma string), 
  a string "stringUm" vira número antes da comparação. Mesmo eles sendo de tipos diferentes, 
  os valores ficam iguais e a comparação retorna verdadeiro.
*/

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
}

/*
  Comparação usando "===":
  O "===" compara tanto o valor quanto o tipo das variáveis e não faz conversão de tipo.
  Então, mesmo que "numeroTrinta" e "stringTrinta" tenham o mesmo valor (30), 
  como um é número e o outro é string, a comparação vai dar falso, já que os tipos não são iguais.
*/

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo');
}

/*
  Comparação usando "==":
  Aqui o "==" vai comparar os valores e também vai converter "stringDez" para número antes de comparar.
  Apesar de "numeroDez" ser um número e "stringDez" ser uma string, os dois têm o mesmo valor (10), 
  então a comparação retorna verdadeiro, mas os tipos continuam sendo diferentes.
*/

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
}