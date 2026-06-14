let numero = 0;

const contador = document.getElementById("contador");

const intervalo = setInterval(() => {

  numero += 5;
  contador.textContent = numero;

  if(numero >= 1000){
    clearInterval(intervalo);
  }

}, 20);

function mostrarMensagem(){

  const frases = [
    "🌱 O futuro nasce da sustentabilidade!",
    "🚜 Tecnologia e natureza podem caminhar juntas!",
    "💧 Cada gota de água economizada faz diferença!",
    "🌳 Preservar hoje garante o amanhã!",
    "🌎 O campo alimenta o mundo!"
  ];

  const sorteio =
  Math.floor(Math.random() * frases.length);

  document.getElementById("texto").textContent =
  frases[sorteio];
}
