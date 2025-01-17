alert("Bem vindo ao jogo do número secreto!!");
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao n.s
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Boaaa!! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
