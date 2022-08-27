document.querySelector("#boton-suma").onclick = function () {
  const horas = document.querySelectorAll(".horas");
  let horasTotales = 0;
  for (let i = 0; i < horas.length; i++) {
    horasTotales += Number(horas[i].value);
  }

  const minutos = document.querySelectorAll(".minutos");
  let minutosTotales = 0;
  for (let i = 0; i < minutos.length; i++) {
    minutosTotales += Number(minutos[i].value);
  }
  horasTotales = Math.floor(minutosTotales / 60) + horasTotales;
  minutosTotales = minutosTotales % 60;

  const segundos = document.querySelectorAll(".segundos");
  let segundosTotales = 0;
  for (let i = 0; i < minutos.length; i++) {
    segundosTotales += Number(segundos[i].value);
  }

  minutosTotales = Math.floor(segundosTotales / 60) + minutosTotales;
  segundosTotales = segundosTotales % 60;

  document.querySelector(
    "#resultado"
  ).innerText = `El tiempo total es de ${horasTotales} horas ${minutosTotales} minutos y ${segundosTotales} segundos `;
};
