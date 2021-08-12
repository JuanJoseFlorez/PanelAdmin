//Agregar
document.getElementById('addUser').onclick = () => {
    let inputNombre = document.getElementById('inputNombre');
    let inputCorreo = document.getElementById('inputCorreo');
    let inputPassword = document.getElementById('inputPassword');
    let inputLocation = document.getElementById('inputLocation');
    let inputPosition = document.getElementById('inputPosition');
    let inputRol = document.getElementById('inputRol');
    if(!inputNombre.value || !inputCorreo.value || !inputPassword.value || !inputLocation.value || !inputPosition.value || !inputRol.value){
        alert('Hace falta llenar los campos para añadir la pregunta');
        return false;
    }

    let data = {
        nombre: inputNombre.value,
        correo: inputCorreo.value,
        password: inputPassword.value,
        location: inputLocation.value,
        position: inputPosition.value,
        rol: inputRol.value
    }

    addUser(data);
}

//Enviar Usuario
const addUser = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/usuarios/", {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Usuario añadido correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Fallo al agregar el usuario');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Eliminar user
const eliminarUsuarios = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/admin/usuarios/?id="+id, {
        method: 'DELETE',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Usuario eliminado correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Usuario no fue eliminado correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Actualizar user
const actualizarUsuario = (id, contador) => {
    console.log(id);
    console.log(contador);
    let inputs = document.getElementsByClassName('usuarios'+contador);
    for(let value of inputs){
        if (!value.value) {
            alert('Hace falta llenar los campos para actualizar la pregunta');
            return false;
        }
    }
    let data = {
        estado: inputs[0].value,
        nombre: inputs[1].value,
        correo: inputs[2].value,
        location: inputs[3].value,
        position: inputs[4].value,
        rol:inputs[5].value
    }
    
    fetch("https://server-relyer.herokuapp.com/api/admin/usuarios/?id="+id, {
        method: 'PUT',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Usuario actualizado correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Usuario no fue actualizado correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}