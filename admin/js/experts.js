//Agregar
document.getElementById('addExpert').onclick = () => {
    let inputNombreExpertos = document.getElementById('inputNombreExpertos');
    let inputCategoriaExpertos = document.getElementById('inputCategoriaExpertos');
    let inputCorreoExpertos = document.getElementById('inputCorreoExpertos');
    let inputTelefonoExpertos = document.getElementById('inputTelefonoExpertos');
    let inputCompaniaExpertos = document.getElementById('inputCompaniaExpertos');
    let inputExperienciaExpertos = document.getElementById('inputExperienciaExpertos');

    if (!inputNombreExpertos.value || !inputCategoriaExpertos.value || !inputCorreoExpertos.value || !inputTelefonoExpertos.value || !inputCompaniaExpertos.value || !inputExperienciaExpertos.value) {
        alert('Hace falta llenar los campos para añadir la pregunta');
        return false;
    }

    let data = {
        nombre: inputNombreExpertos.value,
        category: inputCategoriaExpertos.value,
        correo: inputCorreoExpertos.value,
        phoneNumber: inputTelefonoExpertos.value,
        company: inputCompaniaExpertos.value,
        experience: inputExperienciaExpertos.value
    }

    addExpert(data);
}
//Enviar experto
const addExpert = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/expertos/", {
        method: 'POST',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Experto añadido correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Fallo al agregar el experto');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Actualizar experto
const actualizarExperto = (id, contador) => {
    console.log(id);
    console.log(contador);
    let inputs = document.getElementsByClassName('expert' + contador);
    for (let value of inputs) {
        if (!value.value) {
            alert('Hace falta llenar los campos para actualizar la pregunta');
            return false;
        }
    }
    let data = {
        estado: inputs[0].value,
        nombre: inputs[1].value,
        category: inputs[2].value,
        correo: inputs[3].value,
        phoneNumber: inputs[4].value,
        company: inputs[5].value,
        experience: inputs[6].value
    }

    fetch("https://server-relyer.herokuapp.com/api/admin/expertos/?id=" + id, {
        method: 'PUT',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Experto actualizado correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Experto no fue actualizado correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Eliminar expertos
const eliminarExperto = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/admin/expertos/?id="+id, {
        method: 'DELETE',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Experto eliminado correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Experto no fue eliminado correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}