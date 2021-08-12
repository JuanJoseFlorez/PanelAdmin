const listarPreguntas = () => {
    fetch("https://server-relyer.herokuapp.com/api/questions/", {
    }).then(response => response.json())
        .then(data => {
            escribirPreguntas(data.questions);
        }).catch(message_error => console.log('F' + message_error))
}
const listarPreguntasEn = () => {
    fetch("https://server-relyer.herokuapp.com/api/questionsen", {
    }).then(response => response.json())
        .then(data => {
            escribirPreguntasEn(data.questions);
        }).catch(message_error => console.log('F' + message_error))
}

const listarRespuestas = () => {
    fetch("https://server-relyer.herokuapp.com/api/answers/", {
    }).then(response => response.json())
        .then(data => {
            escribirRespuestas(data.answers);
        }).catch(message_error => console.log('F' + message_error))
}

const listarRespuestasEn = () => {
    fetch("https://server-relyer.herokuapp.com/api/answersen", {
    }).then(response => response.json())
        .then(data => {
            escribirRespuestasEn(data.answers);
        }).catch(message_error => console.log('F' + message_error))
}

const listarResultados = () => {
    fetch("https://server-relyer.herokuapp.com/api/results/", {
    }).then(response => response.json())
        .then(data => {
            escribirResultados(data.results);
        }).catch(message_error => console.log('F' + message_error))
}

const listarUser = () => {
    fetch("https://server-relyer.herokuapp.com/api/admin/usuarios/", {
        headers: {
            "x-token": tkn
            }
    }).then(response => response.json())
        .then(data => {
            escribirUsuarios(data.user);
        }).catch(message_error => console.log('F' + message_error))
}

const listarContact = () => {
    fetch("https://server-relyer.herokuapp.com/api/contact/", {
        headers: {
            "x-token": tkn
            }
    }).then(response => response.json())
        .then(data => {
            console.log(data.entries);
            escribirContacto(data.entries);
        }).catch(message_error => console.log('F' + message_error))
}

const listarExperts = () => {
    fetch("https://server-relyer.herokuapp.com/api/admin/expertos", {
        headers: {
            "x-token": tkn
            }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            escribirExpert(data.expert);
        }).catch(message_error => console.log('F' + message_error))
}

const listarTools = () => {
    fetch("https://server-relyer.herokuapp.com/api/admin/tools/", {
        headers: {
            "x-token": tkn
            }
    }).then(response => response.json())
        .then(data => {
            escribirHerramientas(data.tools);
        }).catch(message_error => console.log('F' + message_error))
}
