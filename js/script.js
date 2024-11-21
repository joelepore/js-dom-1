// Prendo gli elementi che mi servono dal DOM
const imgLampadina = document.querySelector('.wrapper img');
const btnToggleLight = document.querySelector('.wrapper button');
// Preparo i path e i messaggi
const pathImgLightOn = 'img/yellow_lamp.png';
const pathImgLightOff = 'img/white_lamp.png';
const textAccendi = 'Accendi';
const textSpegni = 'Spegni';
// Flag per gestire lo stato della lampadina
let isLightOn = false;
/* 
  Gestisco l'evento del click
    1. Cambio lo stato  
    2. In base allo stato, cambio il path dell'img
    3. In base allo stato, cambio il testo del pulsante
*/
btnToggleLight.addEventListener('click', () => {
  isLightOn = !isLightOn;
  imgLampadina.src = isLightOn ? pathImgLightOn : pathImgLightOff;
  btnToggleLight.innerHTML = isLightOn ? textSpegni : textAccendi;
})