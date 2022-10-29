const form = document.getElementById ('form')
const username = document.getElementById ('username')
const email = document.getElementById ('email')
const password = document.getElementById ('psw')
const confirmPassword = document.getElementById ('psw2')

form.addEventListener('submit', function(event){
    event.preventDefault()
    inputValue()
})

function inputValue(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const pswValue = psw.value.trim()
    const psw2Value = psw2.value.trim()

    if (usernameValue === ''){
    setIncorrectFor(username, 'Username cannot be blank')
    }
}

function setIncorrectFor(input, message){
    const formOrder = input.parentElement;
    const small = formOrder.querySelector('small')
    small.innerText = message
}