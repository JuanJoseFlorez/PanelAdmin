let tkn = localStorage.getItem("tokenAdmin");
if (tkn) {
    const validarToken = () => {
        fetch("https://server-relyer.herokuapp.com/api/admin/", {
            method: 'POST',
            headers: {
            "x-token": tkn
            }
        }).then(response => response.json())
            .then(msg => {
                if (msg.msg == "Sesion es valida") {
                    window.location.href = "../admin/admin";
                }
            }).catch(message_error => console.log('F' + message_error))
    }
    validarToken();
}

const login = document.getElementsByClassName('loginForm')[0]


async function servidor() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/auth/loginAdmin')
    let response = request.json()

    console.log(response)

}


login.addEventListener('submit', async (e) => {

    let loginData = document.querySelectorAll(' input')
    let mail = loginData[0].value
    let userPassword = loginData[1].value

    e.preventDefault()

    let message = {
        correo: mail,
        password: userPassword
    }

    console.log(JSON.stringify(message))

    let request = await fetch('https://server-relyer.herokuapp.com/api/auth/loginAdmin', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(message)
    })

    let response = await request.json()
    console.log(response);
    if (response.usuario) {
        localStorage.setItem('tokenAdmin', response.token)
        window.location.href = "../admin/admin"
    } else {
        alert(response.msg);
    }

})