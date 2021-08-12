//Agregar
document.getElementById('addContact').onclick = () => {
    let inpuNombreContacto = document.getElementById('inpuNombreContacto');
    let inputCorreoContacto = document.getElementById('inputCorreoContacto');
    let inputTelefonoContacto = document.getElementById('inputTelefonoContacto');
    let inputComentario = document.getElementById('inputComentario');
    
    if(!inpuNombreContacto.value || !inputCorreoContacto.value || !inputTelefonoContacto.value || !inputComentario.value){
        alert('Hace falta llenar los campos para añadir la pregunta');
        return false;
    }

    let data = {
        nombre: inpuNombreContacto.value,
        correo: inputCorreoContacto.value,
        telefono: inputTelefonoContacto.value,
        comentario: inputComentario.value
    }

    addContact(data);
}
const addContact = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/contact/", {
        method: 'POST',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Contacto añadido correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Fallo al agregar el contacto');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Actualizar contacto
const actualizarContacto = (id, contador) => {
    console.log(id);
    console.log(contador);
    let inputs = document.getElementsByClassName('contacto'+contador);
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
        telefono: inputs[3].value,
        comentario: inputs[4].value
    }
    
    fetch("https://server-relyer.herokuapp.com/api/contact/?id="+id, {
        method: 'PUT',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Contacto actualizado correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Contacto no fue actualizado correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Eliminar contacto
const eliminarContacto = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/contact/?id="+id, {
        method: 'DELETE',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Contacto eliminado correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Contacto no fue eliminado correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}