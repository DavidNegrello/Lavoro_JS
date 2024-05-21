var prova = document.getElementById("btn");
var prova1 = document.getElementById("btnR8");
var prova2 = document.getElementById("btnA6");
var prova3 = document.getElementById("btnQ8");
var prova4 = document.getElementById("btnE1");
var prova5 = document.getElementById("btnE2");
var x =  document.getElementById("DivMio");
var x1 =  document.getElementById("DivMio2");
var x2 =  document.getElementById("DivMio3");
var x3 =  document.getElementById("DivMio4");
var x4 =  document.getElementById("DivMio5");
var x5 =  document.getElementById("DivMio6");
x.style.display = "none";
x1.style.display = "none";
x2.style.display = "none";
x3.style.display = "none";
x4.style.display = "none";
x5.style.display = "none";
prova.addEventListener("click", function myFunction() {
    
    if (x.style.display === "none") {
      x.style.display = "block";
      prova.textContent="Less Info";
    } else {
      x.style.display = "none";
      prova.textContent="More Info";
    }    
});
prova1.addEventListener("click", function myFunction() {
    
    if (x1.style.display === "none") {
      x1.style.display = "block";
      prova1.textContent="Less Info";
    } else {
      x1.style.display = "none";
      prova1.textContent="More Info";
    }    
});
prova2.addEventListener("click", function myFunction() {
    
    if (x2.style.display === "none") {
      x2.style.display = "block";
      prova2.textContent="Less Info";
    } else {
      x2.style.display = "none";
      prova2.textContent="More Info";
    }    
});
prova3.addEventListener("click", function myFunction() {
    
    if (x3.style.display === "none") {
      x3.style.display = "block";
      prova3.textContent="Less Info";
    } else {
      x3.style.display = "none";
      prova3.textContent="More Info";
    }    
});
prova4.addEventListener("click", function myFunction() {
    
    if (x4.style.display === "none") {
      x4.style.display = "block";
      prova4.textContent="Less Info";
    } else {
      x4.style.display = "none";
      prova4.textContent="More Info";
    }    
});
prova5.addEventListener("click", function myFunction() {
    
    if (x5.style.display === "none") {
      x5.style.display = "block";
      prova5.textContent="Less Info";
    } else {
      x5.style.display = "none";
      prova5.textContent="More Info";
    }    
});