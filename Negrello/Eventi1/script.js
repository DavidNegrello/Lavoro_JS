const h1Elements = document.querySelectorAll("h1");
const logEventi = function(event){
    //alert(event.target); //ti da l'evento
    //alert(event.target.id); //ti da l'identificative del target dell'evento, si può fare anche con la classe
    this.textContent=event.type+"\n"+event.target.id    //il this serve per rendere la pagina dinamica
    this.style.backgroundColor="tomato";
    this.style.transition="background-color 3s";
    setTimeout(()=>{
        this.style.background="transparent";
    },3000);
};

h1Elements[0].addEventListener("click",logEventi);
h1Elements[1].addEventListener("mousedown",logEventi);
h1Elements[2].addEventListener("mouseup",logEventi);
h1Elements[3].addEventListener("mouseenter",logEventi);
h1Elements[4].addEventListener("mouseleave",logEventi);