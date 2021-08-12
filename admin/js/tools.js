//Agregar
document.getElementById('addTools').onclick = () => {
    let inputNombreHerramientas = document.getElementById('inputNombreHerramientas');
    let inputCategoria = document.getElementById('inputCategoria');
    let inputDescripcion = document.getElementById('inputDescripcion');

    if (!inputNombreHerramientas.value || !inputCategoria.value || !inputDescripcion.value) {
        alert('Hace falta llenar los campos para añadir la pregunta');
        return false;
    }

    let data = {
        nombre: inputNombreHerramientas.value,
        category: inputCategoria.value,
        description: inputDescripcion.value
    }

    addTools(data);
}

//Enviar herramienta
const addTools = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/tools/", {
        method: 'POST',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Herramienta añadida correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Fallo al agregar la herramienta');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//actualizar herramienta
const actualizarTools = (id, contador) => {
    console.log(id);
    console.log(contador);
    let inputs = document.getElementsByClassName('tools' + contador);
    for (let value of inputs) {
        if (!value.value) {
            alert('Hace falta llenar los campos para actualizar la pregunta');
            return false;
        }
        console.log(value);
    }
    let data = {
        estado: inputs[0].value,
        nombre: inputs[1].value,
        category: inputs[2].value,
        description: inputs[3].value
    }

    fetch("https://server-relyer.herokuapp.com/api/admin/tools/?id=" + id, {
        method: 'PUT',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Herramienta actualizada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Herramienta no fue actualizada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

//Elimar herramienta
const eliminarTools = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/admin/tools/?id="+id, {
        method: 'DELETE',
        headers: {
            "x-token": tkn,
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Herramienta eliminada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Herramienta no fue eliminada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}