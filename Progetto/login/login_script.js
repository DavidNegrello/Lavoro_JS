const container = document.querySelector(".container"),
mostraNascondi = document.querySelectorAll(".mostraNascondi"),
passwordPosto = document.querySelectorAll(".password");

 
 
 //   Per mostrare o nascondere la password
 mostraNascondi.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            passwordPosto.forEach(passwordPosto =>{
                if(passwordPosto.type ==="password"){
                    passwordPosto.type = "text";
                    mostraNascondi.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    passwordPosto.type = "password";
                    mostraNascondi.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })
 //Secondo form 
 function gestisciLogin() {
    // Nascondi il form di accesso
    document.getElementById('form-login').classList.add('hidden');
    
    // Mostra il form di ringraziamento
    document.getElementById('secondo-form').classList.remove('hidden');
};   