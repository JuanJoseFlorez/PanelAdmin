const escribirUsuarios = (data) => {
    let contador = 1;
    for (let value of data) {
        user.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<td><input class="text usuarios' + contador + '" type="text" disabled="true" value="' + value.estado + '"></td>' +
            '<td><input class="text usuarios' + contador + '" type="text" disabled="true" value="' + value.nombre + '"></td>' +
            '<td><input class="text usuarios' + contador + '" type="text" disabled="true" value="' + value.correo + '"></td>' +
            '<td><input class="text usuarios' + contador + '" type="text" disabled="true" value="' + value.location + '"></td>' +
            '<td><input class="text usuarios' + contador + '" type="text" disabled="true" value="' + value.position + '"></td>' +
            '<td><input class="text usuarios' + contador + '" type="text" disabled="true" value="' + value.rol + '"></td>' +
            '<td><i id="checkusuarios' + contador + '" onclick="actualizarUsuario(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editusuarios' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'usuarios' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarUsuarios(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirPreguntas = (data) => {
    let contador = 1;
    for (let value of data) {
        preguntas.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<input type="hidden" value="' + value.uid + '">' +
            '<td>' + value.uid + '</td>' +
            '<td><input class="text preguntas' + contador + '" type="text" disabled="true" value="' + value.question + '"></td>' +
            '<td><input class="text preguntas' + contador + '" type="text" disabled="true" value="' + value.type + '"></td>' +
            '<td><i id="checkpreguntas' + contador + '" onclick="actualizarPregunta(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editpreguntas' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'preguntas' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarPregunta(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirPreguntasEn = (data) => {
    let contador = 1;
    for (let value of data) {
        preguntasEn.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<input type="hidden" value="' + value.uid + '">' +
            '<td>' + value.uid + '</td>' +
            '<td><input class="text preguntasen' + contador + '" type="text" disabled="true" value="' + value.question + '"></td>' +
            '<td><input class="text preguntasen' + contador + '" type="text" disabled="true" value="' + value.type + '"></td>' +
            '<td><i id="checkpreguntasen' + contador + '" onclick="actualizarPreguntaEn(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editpreguntasen' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'preguntasen' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarPreguntaEn(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirRespuestas = (data) => {
    let contador = 1;
    for (let value of data) {
        respuestas.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<input type="hidden" value="' + value.uid + '">' +
            '<td><input class="text respuestas' + contador + '" type="text" disabled="true" value="' + value.answer + '"></td>' +
            '<td><input class="text respuestas' + contador + '" type="text" disabled="true" value="' + value.value + '"></td>' +
            '<td><input class="text respuestas' + contador + '" type="text" disabled="true" value="' + value.questionId + '"></td>' +
            '<td><i id="checkrespuestas' + contador + '" onclick="actualizarRespuesta(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editrespuestas' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'respuestas' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarRespuesta(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirRespuestasEn = (data) => {
    let contador = 1;
    for (let value of data) {
        respuestasEn.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<input type="hidden" value="' + value.uid + '">' +
            '<td><input class="text respuestasen' + contador + '" type="text" disabled="true" value="' + value.answer + '"></td>' +
            '<td><input class="text respuestasen' + contador + '" type="text" disabled="true" value="' + value.value + '"></td>' +
            '<td><input class="text respuestasen' + contador + '" type="text" disabled="true" value="' + value.questionId + '"></td>' +
            '<td><i id="checkrespuestasen' + contador + '" onclick="actualizarRespuestaEn(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editrespuestasen' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'respuestasen' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarRespuestaEn(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirResultados = (data) => {
    let contador = 1;
    for (let value of data) {
        resultados.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<input type="hidden" value="' + value.uid + '">' +
            '<td><input class="text" type="text" disabled="true" value="' + value.questionsId + '"></td>' +
            '<td><input class="text" type="text" disabled="true" value="' + value.answers + '"></td>' +
            '<td><input class="text" type="text" disabled="true" value="' + value.totalScore + '"></td>' +
            '<td><input class="text resultados' + contador + '" type="text" disabled="true" value="' + value.usuarioId + '"></td>' +
            '<td><i onclick="eliminarResultado(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirContacto = (data) => {
    let contador = 1;
    for (let value of data) {
        contacto.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<td>' + value.date + '</td>' +
            '<td><input class="text contacto' + contador + '" type="text" disabled="true" value="' + value.estado + '"></td>' +
            '<td><input class="text contacto' + contador + '" type="text" disabled="true" value="' + value.nombre + '"></td>' +
            '<td><input class="text contacto' + contador + '" type="text" disabled="true" value="' + value.correo + '"></td>' +
            '<td><input class="text contacto' + contador + '" type="text" disabled="true" value="' + value.telefono + '"></td>' +
            '<td><input class="text contacto' + contador + '" type="text" disabled="true" value="' + value.comentario + '"></td>' +
            '<td><i id="checkcontacto' + contador + '" onclick="actualizarContacto(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editcontacto' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'contacto' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarContacto(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirExpert = (data) => {
    let contador = 1;
    for (let value of data) {
        experts.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.estado + '"></td>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.nombre + '"></td>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.category + '"></td>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.correo + '"></td>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.phoneNumber + '"></td>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.company + '"></td>' +
            '<td><input class="text expert' + contador + '" type="text" disabled="true" value="' + value.experience + '"></td>' +
            '<td><i id="checkexpert' + contador + '" onclick="actualizarExperto(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="editexpert' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'expert' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarExperto(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}
const escribirHerramientas = (data) => {
    let contador = 1;
    for (let value of data) {
        tools.innerHTML += '<tr>' +
            '<th scope="row">' + contador + '</th>' +
            '<td><input class="text tools' + contador + '" type="text" disabled="true" value="' + value.estado + '"></td>' +
            '<td><input class="text tools' + contador + '" type="text" disabled="true" value="' + value.nombre + '"></td>' +
            '<td><input class="text tools' + contador + '" type="text" disabled="true" value="' + value.category + '"></td>' +
            '<td><input class="text tools' + contador + '" type="text" disabled="true" value="' + value.description + '"></td>' +
            '<td><i id="checktools' + contador + '" onclick="actualizarTools(' + comilla + value.uid + comilla + ',' + contador + ')" style="color:green; display:none" class="far fa-check-square"></i> <i id="edittools' + contador + '" onclick="habilitarInput(' + contador + ',' + comilla + 'tools' + comilla + ')" class="far fa-edit"></i> <i onclick="eliminarTools(' + comilla + value.uid + comilla + ')" class="far fa-trash-alt"></i></td></tr>'
        contador++;
    }
}