const form = document.getElementById('trial')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const emailAddress = document.getElementById('email')
const password = document.getElementById('password')
const messages = document.querySelectorAll('.error-message')

const inputs = [firstName, lastName, password]

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(email)
}

function errorMessage(e) {
    const email = form.email.value
    
    if( !validateEmail(email) ){
        e.preventDefault()
        emailAddress.classList.add('error')
    }
    
    if( email == "" ) {
        e.preventDefault()
        form.email.placeholder = 'email@example/com'
    }

    inputs.forEach( input => {
        if( input.value == "" ) {
            e.preventDefault()
            input.classList.add('error')

            messages.forEach( message => {
                message.classList.add('active')
            })
        }
    })   
}

form.addEventListener('submit', errorMessage)