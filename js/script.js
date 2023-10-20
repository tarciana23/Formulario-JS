const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea= document.querySelector("#message")


console.log(form,nameInput,emailInput);

form.addEventListener("submit",(event)=>{
    event.preventDefault();//antes de enviar fazer as verficações

    //Verifica se o nome está preenchido
    if(nameInput.value === ""){
        alert("Digite seu nome para enviar o formulário");
        return;
    }

    //Verifica se o email está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value) ){
        alert("Digite seu email para enviar o formulário");
        return;
    }

    //Verifica se a senha está preenchida
    if(!validaPassword(passwordInput.value,8)){
        alert("A senha precisa ter no mínimo 8 digitos")
    }

    //Verifica se a situação foi selecionada
    if(jobSelect.value ===""){
        alert("Por favor,selecione a sua situação");
        return;
    }

    //verifca se a mensagem está preenchida
    if(messageTextarea.value ===""){
        alert("Por favor, digite uma mensagem")
        return;
    }
      
    //Se todos os campos estiverem corretamente preenchidos,envie o form
    form.submit();

});

//função que valida email
    function isEmailValid(email){

        const emailRegex = new RegExp(
            /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );

        if(emailRegex.test(email)){
            return true;
        }

        return false;
    }

//função que valida a senha
    function validaPassword(password,minDigits){
        if(password.length >=minDigits){
            return true;
        }
        return false;
    }
    