// -------------------------------- Resultados --------------------------------

const eliminarResultado = (id) => {
    console.log(id);
    fetch("https://server-relyer.herokuapp.com/api/results/id/?id=" + id, {
        method: 'DELETE',
        headers: {
            "content-type": 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            alert('Resultado eliminada correctamente');
            location.reload();
            return response.text()
        } else {
            alert('Resultado no fue eliminada correctamente');
            location.reload();
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

// -------------------------------- Fin resultados --------------------------------