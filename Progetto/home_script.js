//codice per gestire la barra di ricerca nell'apertura o chiusura quandi si preme
let ricerca = document.querySelector('.search-box');
document.querySelector('#search-icona').onclick = () =>{
    ricerca.classList.toggle('attivo');
}

//======================per cambiare la mappa====================


const cambiaMapButton=[
  document.getElementById("mappa1"),
  document.getElementById("mappa2"),
  document.getElementById("mappa3")
];

var mapIframe = document.getElementById("map-iframe");


let newMap1Url = "";
let newMap2url="" ;
let newMap3url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11263.815111214883!2d11.84640025!3d45.107004999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4055020a54b1b277%3A0xa60a519e6911fea3!2sMarangoni%20claudio!5e0!3m2!1sit!2sit!4v1715954720198!5m2!1sit!2sit";

cambiaMapButton[0].addEventListener("click", () => {
  mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78186.81884493981!2d12.0846176068804!3d44.96567432694127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e883a6083e793%3A0xab8791b58fa0deed!2sAgriturismo%20Casa%20Ramello!5e0!3m2!1sit!2sit!4v1715957782654!5m2!1sit!2sit";
  cambiaMapButton[0].style.backgroundColor = '#b6cc54';
  // Disabilita il bottone quando è stato premuto
  cambiaMapButton[0].disabled = true;

  //bottone 2
  cambiaMapButton[1].disabled = false;
  cambiaMapButton[1].style.backgroundColor = 'white';
  //Bottone 3
  cambiaMapButton[2].disabled = false;
  cambiaMapButton[2].style.backgroundColor = 'white';
});

cambiaMapButton[1].addEventListener("click",() =>{
  //bottone 1
  cambiaMapButton[0].disabled = false;
  cambiaMapButton[0].style.backgroundColor = 'white';
  //Bottone 3
  cambiaMapButton[2].disabled = false;
  cambiaMapButton[2].style.backgroundColor = 'white';

  mapIframe.src = "";
  cambiaMapButton[1].style.backgroundColor = '#b6cc54';
  cambiaMapButton[1].disabled=true;
});

cambiaMapButton[2].addEventListener("click",() =>{
  //bottone 1
  cambiaMapButton[0].disabled = false;
  cambiaMapButton[0].style.backgroundColor = 'white';
  //bottone 2
  cambiaMapButton[1].disabled = false;
  cambiaMapButton[1].style.backgroundColor = 'white';

  mapIframe.src = "";
  cambiaMapButton[2].style.backgroundColor = '#b6cc54';
  cambiaMapButton[2].disabled=true;
});