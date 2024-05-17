//codice per gestire la barra di ricerca nell'apertura o chiusura quandi si preme
let ricerca = document.querySelector('.search-box');
document.querySelector('#search-icona').onclick = () =>{
    ricerca.classList.toggle('attivo');
}

//======================per cambiare la mappa====================
const changeMapButton = document.getElementById("mappa1");
const mapIframe = document.getElementById("map-iframe");

let newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78186.81884493981!2d12.0846176068804!3d44.96567432694127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e883a6083e793%3A0xab8791b58fa0deed!2sAgriturismo%20Casa%20Ramello!5e0!3m2!1sit!2sit!4v1715957782654!5m2!1sit!2sit";

changeMapButton.addEventListener("click", () => {
  mapIframe.src = newMapUrl;
});

