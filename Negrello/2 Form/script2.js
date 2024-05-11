let btn = document.querySelector('input[type = "submit"]');
btn.addEventListener("click", function(){
    let userName = document.querySelector('input[type = "text"]').value;
    let password = document.querySelector('input[type = "password"]').value;
    if(userName && password){
        localStorage.setItem("pippo", userName);
        localStorage.setItem("password", password);
        window.close();
    }
    else{
        alert("per cortesia inserire i dati");
    }
})