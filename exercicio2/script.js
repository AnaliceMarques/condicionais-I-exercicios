let idade = Number(prompt("Qual a sua idade?"));
let terminouEnsinoMedio = prompt(
  'Você já terminou o ensino médio? \nResponda "true" para sim e "false" para não.'
);
let cursandoFaculdade = prompt(
  `Você não está cursando alguma faculdade? \nResponda "true" para confirmar e "false" para negar.`
);

if (idade >= 18) {
  console.log("A pessoa é maior de idade.");
} else {
  console.log("A pessoa é menor de idade.");
}

//Não está reconhecendo o true sem ser com as aspas.
if (terminouEnsinoMedio == "true") {
  console.log("A pessoa terminou o ensino médio.");
} else {
  console.log("A pessoa não terminou o ensino médio.");
}

if (cursandoFaculdade == "true") {
  console.log("A pessoa não está cursando faculdade.");
} else {
  console.log("A pessoa está cursando faculdade.");
}
