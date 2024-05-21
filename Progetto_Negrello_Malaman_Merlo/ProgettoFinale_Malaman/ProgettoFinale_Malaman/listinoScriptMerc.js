var contenitoreBottoni = [document.getElementById('btn'),document.getElementById('btnR8'),document.getElementById('btnA6'),document.getElementById('btnQ8'),document.getElementById('btnE1'),document.getElementById('btnE2')];
var containerText = [document.getElementById('DivMio'),document.getElementById('DivMio2'),document.getElementById('DivMio3'),document.getElementById('DivMio4'),document.getElementById('DivMio5'),document.getElementById('DivMio6')];
var i;
for(i=0;i < (containerText.length); i++)
  {
    containerText[i].style.display = "none"; 
  }
contenitoreBottoni[0].addEventListener("click", function myFunction() {
    
    if (containerText[0].style.display === "none") {
    containerText[0].style.display = "block";
    contenitoreBottoni[0].textContent="Less Info";
    } else {
    containerText[0].style.display = "none";
    contenitoreBottoni[0].textContent="More Info";
    }    
});
contenitoreBottoni[1].addEventListener("click", function myFunction() {
    
    if (containerText[1].style.display === "none") {
      containerText[1].style.display = "block";
      contenitoreBottoni[1].textContent="Less Info";
    } else {
      containerText[1].style.display = "none";
      contenitoreBottoni[1].textContent="More Info";
    }    
});
contenitoreBottoni[2].addEventListener("click", function myFunction() {
    
    if (containerText[2].style.display === "none") {
      containerText[2].style.display = "block";
      contenitoreBottoni[2].textContent="Less Info";
    } else {
      containerText[2].style.display = "none";
      contenitoreBottoni[2].textContent="More Info";
    }    
});
contenitoreBottoni[3].addEventListener("click", function myFunction() {
    
    if (containerText[3].style.display === "none") {
      containerText[3].style.display = "block";
      contenitoreBottoni[3].textContent="Less Info";
    } else {
      containerText[3].style.display = "none";
      contenitoreBottoni[3].textContent="More Info";
    }    
});
contenitoreBottoni[4].addEventListener("click", function myFunction() {
    
    if (containerText[4].style.display === "none") {
      containerText[4].style.display = "block";
      contenitoreBottoni[4].textContent="Less Info";
    } else {
      containerText[4].style.display = "none";
      contenitoreBottoni[4].textContent="More Info";
    }    
});
contenitoreBottoni[5].addEventListener("click", function myFunction() {
    
    if (containerText[5].style.display === "none") {
      containerText[5].style.display = "block";
      contenitoreBottoni[5].textContent="Less Info";
    } else {
      containerText[5].style.display = "none";
      contenitoreBottoni[5].textContent="More Info";
    }    
});