//codice per gestire la barra di ricerca nell'apertura o chiusura quandi si preme
let ricerca = document.querySelector('.search-box');
document.querySelector('#search-icona').onclick = () =>{
    ricerca.classList.toggle('attivo');
}