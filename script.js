const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (Event) => {
    Event.preventDefault(); //prevenção de comportamento padrão
    checkForm();
})
// REMOVE ALERTA AO TIRAR O FOCO DO INPUT PREENCHIDO
email.addEventListener("blur", () => {
    checkInputEmail();
})
username.addEventListener("blur", () => {
    checkInputUsername();
})


// VALIDAÇÃO INPUT USERNAME
function checkInputUsername(){
    const usernameValue = username.value;
    console.log(usernameValue);
    // CONDIÇÃO DE VALIDAÇÃO
    if(usernameValue == ""){
        errorInput (username, "Sessão obrigatória") //ACIONA ALERTA
    } else { 
        const formItem = username.parentElement; 
        formItem.className = "form-content" // RETIRA ALERTA
    }
}
// VALIDAÇÃO INPUT EMAIL
function checkInputEmail(){
    const emailValue = email.value;
    // CONDIÇÃO DE VALIDAÇÃO
    if(emailValue === ""){
        errorInput(email, "Sessão obrigrória") //ACIONA ALERTA
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content" // RETIRA ALERTA
    }
}
// VALIDAÇÃO INPUT PASSWORD
function checkInputPassword(){
    const passwordValue = password.value;
    // CONDIÇÃO DE VALIDAÇÃO
    if(passwordValue === ""){
        errorInput(password, "Sessão obrigatória") //ACIONA ALERTA
    } else if (passwordValue.length < 8){
        errorInput(password, "A senha precisa ter minimo de 8 caracteres")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content" // RETIRA ALERTA
    }
}
// VALIDAÇÃO INPUT PASSWORD CONFIRMATION
function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    // CONDIÇÃO DE VALIDAÇÃO
    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Sessão obrigatória")
    // caso tenha algo preenchido, porém diferente do conteudo da sessão password, o console mostra "As senhas não correspondem"
    } else if (passwordConfirmationValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não correspondem") //ACIONA ALERTA
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content" // RETIRA ALERTA
    }
}

// CHECAR SESSÕES DO FORMULÁRIO
function checkForm(){
    
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    // 
    const formItems = form.querySelectorAll(".form-content")
    // passa por todos os elementos e verifica se TODOS preenchidos (com a class 'form-content')
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })
    // se todos os elementos forem 'true', o formulário é valido e o console mostra "Casdastrado com sucesso!"
    if (isValid) {
        alert("Casdastrado com sucesso!")
    } else {
        alert("Preença todos os campos do formulário")
    }

}

// FUNÇÃO DE ALERTA
function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}