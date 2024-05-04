const secretFunction = function()
{
    return Math.floor(Math.random()*10)+1;
}
let secretNumber;
let buttons = document.body.querySelectorAll("button");
secretNumber =secretFunction();
let buttonVar = buttons[0].addEventListener("click", function(){
    if(secretNumber == document.body.querySelector("input").value)
    {
        alert("Hai indovinato");
    }else
    {
        alert("Hai sbagliato");
    }
});
let buttonRes = buttons[1].addEventListener("click", function(){
    secretNumber = secretFunction();
});
