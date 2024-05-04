//va da 0 a 1(escluso) quindi si moltiplica 10, il floor è per evitare i decimali
const SecretFunction = function()
{
    return Math.floor(Math.random()*10)+1;
}

let secretNumber;
var buttons = document.querySelectorAll("button");
secretNumber = SecretFunction();
buttons[0].addEventListener("click", function(){
if(secretNumber == document.body.querySelector("input").value)
{
    alert("Hai indovinato!");
}
else
{
    alert("Hai sbagliato");
}
});
buttons[1].addEventListener("click", function(){
    secretNumber = SecretFunction();
})

