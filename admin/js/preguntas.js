// -------------------------------- Preguntas --------------------------------

// Añadir
document.getElementById('addQuestion').onclick = () => {
    let inputPregunta = document.getElementById('inputPregunta');
    let inputType = document.getElementById('inputType')
    console.log(inputPregunta);
    console.log(inputType);
    if(!inputPregunta.value || !inputType.value){
        alert('Hace falta llenar los campos para añadir la pregunta');
        return false;
    }

    let data = {
        question: inputPregunta.value,
        type: inputType.value
    }

    addQuestion(data);
}

//Enviar pregunta
const addQuestion = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/questions/", {
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

const actualizarPregunta = (id, contador) => {
    console.log(id);
    console.log(contador);
    let inputs = document.getElementsByClassName('preguntas'+contador);
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
    
    fetch("https://server-relyer.herokuapp.com/api/questions/?id="+id, {
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

const eliminarPregunta = (id) => {
    fetch("https://server-relyer.herokuapp.com/api/questions/?id="+id, {
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

// -------------------------------- Fin preguntas --------------------------------