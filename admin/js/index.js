let comilla = "'"
let preguntas = document.getElementById('preguntasTable');
let sectionPreguntas = document.getElementById('preguntas')
let respuestas = document.getElementById('respuestasTable');
let sectionRespuestas = document.getElementById('respuestas')
let resultados = document.getElementById('resultadosTable');
let sectionResultados = document.getElementById('resultados');
let user = document.getElementById('userTable');
let sectionUser = document.getElementById('usuarios');
let contacto = document.getElementById('contactTable');
let sectionContact = document.getElementById('contacto');
let experts = document.getElementById('expertsTable')
let sectionExperts = document.getElementById('expertos')
let tools = document.getElementById('toolsTable');
let sectionTools = document.getElementById('herramientas')
let resultados1 = document.getElementsByClassName('resultados9');
console.log(resultados1);
console.log(preguntas);
sectionRespuestas.style.display = 'none';
sectionResultados.style.display = 'none';
sectionUser.style.display = 'none';
sectionContact.style.display = 'none';
sectionExperts.style.display = 'none';
sectionTools.style.display = 'none';

document.getElementById('navPreguntas').onclick = function () {
    sectionPreguntas.style.display = 'block'
    sectionRespuestas.style.display = 'none';
    sectionResultados.style.display = 'none';
    sectionUser.style.display = 'none';
    sectionContact.style.display = 'none';
    sectionExperts.style.display = 'none';
    sectionTools.style.display = 'none';
}

document.getElementById('navRespuestas').onclick = function () {
    sectionPreguntas.style.display = 'none'
    sectionRespuestas.style.display = 'block';
    sectionResultados.style.display = 'none';
    sectionUser.style.display = 'none';
    sectionContact.style.display = 'none';
    sectionExperts.style.display = 'none';
    sectionTools.style.display = 'none';
}

document.getElementById('navResultados').onclick = function () {
    sectionPreguntas.style.display = 'none'
    sectionRespuestas.style.display = 'none';
    sectionResultados.style.display = 'block';
    sectionUser.style.display = 'none';
    sectionContact.style.display = 'none';
    sectionExperts.style.display = 'none';
    sectionTools.style.display = 'none';
}

document.getElementById('navUsuario').onclick = function () {
    sectionPreguntas.style.display = 'none';
    sectionRespuestas.style.display = 'none';
    sectionResultados.style.display = 'none';
    sectionUser.style.display = 'block'
    sectionContact.style.display = 'none';
    sectionExperts.style.display = 'none';
    sectionTools.style.display = 'none';
}
document.getElementById('navContacto').onclick = function () {
    sectionPreguntas.style.display = 'none';
    sectionRespuestas.style.display = 'none';
    sectionResultados.style.display = 'none';
    sectionUser.style.display = 'none'
    sectionContact.style.display = 'block';
    sectionExperts.style.display = 'none';
    sectionTools.style.display = 'none';
}
document.getElementById('navExpertos').onclick = function () {
    sectionPreguntas.style.display = 'none';
    sectionRespuestas.style.display = 'none';
    sectionResultados.style.display = 'none';
    sectionUser.style.display = 'none'
    sectionContact.style.display = 'none';
    sectionExperts.style.display = 'block';
    sectionTools.style.display = 'none';
}
document.getElementById('navHerramientas').onclick = function () {
    sectionPreguntas.style.display = 'none';
    sectionRespuestas.style.display = 'none';
    sectionResultados.style.display = 'none';
    sectionUser.style.display = 'none'
    sectionContact.style.display = 'none';
    sectionExperts.style.display = 'none';
    sectionTools.style.display = 'block';
}


listarPreguntas();
listarRespuestas();
listarResultados();
listarUser();
listarContact();
listarExperts();
listarTools();


const habilitarInput = (contador, identificador) => {
    let check = document.getElementById('check' + identificador + contador);
    let edit = document.getElementById('edit' + identificador + contador);
    let inputs = document.getElementsByClassName(identificador + contador);
    console.log(check);
    console.log(edit);
    console.log(inputs);
    check.style.display = "inline"
    edit.style.display = "none"
    for (let value of inputs) {
        value.disabled = false;
    }
}





