// -------------------------------- Preguntas --------------------------------

// Añadir
document.getElementById('addQuestionEn').onclick = () => {
    let inputPregunta = document.getElementById('inputPreguntaEn');
    let inputType = document.getElementById('inputTypeEn')
    if(!inputPregunta.value || !inputType.value){
        alert('Hace falta llenar los campos para añadir la pregunta');
        return false;
    }

    let data = {
        question: inputPregunta.value,
        type: inputType.value
    }

    addQuestionEn(data);
}

//Enviar pregunta
const addQuestionEn = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/questionsen", {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Pregunta añadida correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Fallo al agregar la pregunta');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

const actualizarPreguntaEn = (id, contador) => {
    console.log(id);
    console.log(contador);
    let inputs = document.getElementsByClassName('preguntasen'+contador);
    let pregunta = inputs[0].value;
    let type = inputs[1].value;
    if(!pregunta || !type){
        alert('Hace falta llenar los campos para actualizar la pregunta');
        return false;
    }
    let data = {
        question: pregunta,
        type: type
    }
    
    fetch("https://server-relyer.herokuapp.com/api/questionsen/?id="+id, {
        method: 'PUT',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            alert('Pregunta actualizada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Pregunta no fue actualizada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

const eliminarPreguntaEn = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/questionsen/?id="+id, {
        method: 'DELETE',
        headers: {
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Pregunta eliminada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Pregunta no fue eliminada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}