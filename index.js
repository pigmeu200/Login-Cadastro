function mostrarSenha() {
    var inputPass = document.querySelector('#senha')
    var btnShowPass = document.querySelector('#olho')

    if(inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    } else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}