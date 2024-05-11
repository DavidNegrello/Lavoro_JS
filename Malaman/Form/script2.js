let btn = document.querySelector('input[type = "submit"]');
btn.addEventListener("click", function(){
    let userName = document.querySelector('input[type = "text"]').value;
    let password = document.querySelector('input[type = "password"]').value;
    alert("Username: " + userName + "Password: " + passwowrd);
    if(userName && password)
        {
            localStorage.setItem("Username", userName);
            localStorage.setItem("Password", password);
            window.close();
        }else{
            alert("Per cortesia inserire i dati");
        }
});