const tempo = document.getElementById("tempo");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const retomar = document.getElementById("retomar");
const zerar = document.getElementById("zerar");

let inicio;
let tempoPausado = 0;
let intervalo;

function atualizarTempo() {
  const agora = Date.now();

  const tempoDecorrido = agora - inicio + tempoPausado;

  const horas = Math.floor(tempoDecorrido / 3600000);

  const minutos = Math.floor((tempoDecorrido % 3600000) / 60000);

  const segundos = Math.floor((tempoDecorrido % 60000) / 1000);

  const milesimos = tempoDecorrido % 1000;

  const horasFormatadas = String(horas).padStart(2, "0");

  const minutosFormatados = String(minutos).padStart(2, "0");

  const segundosFormatados = String(segundos).padStart(2, "0");

  const milesimosFormatados = String(milesimos).padStart(3, "0");

  tempo.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}:${milesimosFormatados}`;
}

iniciar.addEventListener("click", function () {
  inicio = Date.now();

  tempoPausado = 0;

  clearInterval(intervalo);

  intervalo = setInterval(atualizarTempo, 10);
});

pausar.addEventListener("click", function () {
  if (inicio !== undefined) {
    tempoPausado += Date.now() - inicio;

    clearInterval(intervalo);

    inicio = undefined;
  }
});

retomar.addEventListener("click", function () {
  if (inicio === undefined) {
    inicio = Date.now();

    clearInterval(intervalo);

    intervalo = setInterval(atualizarTempo, 10);
  }
});

zerar.addEventListener("click", function () {
  clearInterval(intervalo);

  inicio = undefined;

  tempoPausado = 0;

  tempo.textContent = "00:00:00:000";
});
