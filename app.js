// Mensagem inicial
alert("🎯 Bem-vindo(a) ao Jogo do Número Secreto!");

// Gera número secreto aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 1;
let chute;

// Função para tocar som (opcional)
function tocarSom(src) {
  const audio = new Audio(src);
  audio.play();
}

// Loop do jogo
while (chute != numeroSecreto) {
  chute = prompt("🤔 Escolha um número entre 1 e 10");

  // Se o jogador cancelar o prompt
  if (chute === null) {
    alert("Jogo encerrado 😢");
    break;
  }

  chute = Number(chute);

  if (isNaN(chute) || chute < 1 || chute > 10) {
    alert("❌ Digite um número válido entre 1 e 10!");
    continue;
  }

  if (chute === numeroSecreto) {
    // ✅ Acertou
    tocarSom("./sounds/vitoria.mp3"); // opcional
    document.body.classList.add("vitoria"); // anima o fundo

    alert(`🎉 Boaaa! Você acertou o número secreto ${numeroSecreto}!`);
    break;
  } else {
    // ❌ Errou
    const dica =
      chute > numeroSecreto
        ? `O número secreto é menor que ${chute} 👇`
        : `O número secreto é maior que ${chute} 👆`;
    alert(dica);
    tentativas++;
  }
}

// Mensagem final se o jogador não desistiu
if (chute != null) {
  const palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
  alert(`🔢 Você descobriu o número com ${tentativas} ${palavraTentativa}.`);

  // Exibe animação de confete e botão de reinício
  mostrarVitoria(numeroSecreto, tentativas);
}

// ======================================================
// 🎆 Função visual pós-vitória
// ======================================================
function mostrarVitoria(numero, tentativas) {
  const confete = document.createElement("div");
  confete.classList.add("confete");
  document.body.appendChild(confete);

  const botao = document.createElement("button");
  botao.textContent = "🔁 Jogar novamente";
  botao.classList.add("container__botao");
  botao.style.width = "auto";
  botao.style.margin = "30px auto";
  botao.style.display = "block";
  botao.addEventListener("click", () => window.location.reload());
  document.body.appendChild(botao);
}




