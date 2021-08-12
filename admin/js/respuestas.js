// -------------------------------- Respuestas --------------------------------

document.getElementById('addAnswer').onclick = () => {
    let inputRespuesta = document.getElementById('inputRespuesta');
    let inputValue = document.getElementById('inputValue')
    let inputPreguntaId = document.getElementById('inputPreguntaId');

    if (!inputRespuesta.value || !inputValue.value || !inputPreguntaId) {
        alert('Hace falta llenar los campos para añadir la respuesta');
        return false;
    }

    let data = {
        answer: inputRespuesta.value,
        value: inputValue.value,
        questionId: inputPreguntaId.value
    }

    addAnswer(data);
}

const addAnswer = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/answers/", {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Respuesta añadida correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Fallo al agregar la respuesta');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

const eliminarRespuesta = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/answers/?id=" + id, {
        method: 'DELETE',
        headers: {
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Respuesta eliminada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Respuesta no fue eliminada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

const actualizarRespuesta = (id, contador) => {
    let inputs = document.getElementsByClassName('respuestas' + contador);
    console.log(inputs);
    let respuesta = inputs[0].value;
    let value = inputs[1].value;
    let preguntaId = inputs[2].value
    if (!respuesta || !value || !preguntaId) {
        alert('Hace falta llenar los campos para actualizar la respuesta');
        return false;
    }
    let data = {
        answer: respuesta,
        value: value,
        questionId: preguntaId
    }

    fetch("https://server-relyer.herokuapp.com/api/answers/?id=" + id, {
        method: 'PUT',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Respuesta actualizada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Respuesta no fue actualizada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

// -------------------------------- Fin respuestas --------------------------------