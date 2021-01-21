
document.querySelector('form input').oninvalid = function() {  
    // remove mensagens de erro padrão
    document.querySelector("article").style.display = "flex"
    // faz a validação novamente
    if (!this.validity.valid) {
        // se estiver inválido, coloca a mensagem
        this.setCustomValidity("Fill this field");
        
    }
 };
document.querySelector("#ok").addEventListener("click", () => {
    document.querySelector("article").style.display = "none"
});
