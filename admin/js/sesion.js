// Validar que la sesion este iniciada
let tkn = localStorage.getItem("tokenAdmin");
if (!tkn) {
    window.location.href = "../admin/login";
}else{
    const validarToken = () => {
        fetch("https://server-relyer.herokuapp.com/api/admin/", {
            method: 'POST',
            headers: {
            "x-token": tkn
            }
        }).then(response => response.json())
            .then(msg => {
                console.log(msg.msg);
                if(msg.msg == "Token no válido"){
                    alert("La sesión ha expirado");
                    window.location.href = "../admin/login";
                }
                else if (msg.msg != "Sesion es valida") {
                    alert("Es necesario iniciar sesión");
                    window.location.href = "../admin/login";
                }
            }).catch(message_error => console.log('F' + message_error))
    }
    validarToken();
}