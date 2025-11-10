function cadastrar() {
    var data = document.getElementById("data").value;
    var tempo = document.getElementById("tempo").value;
    var pratica = document.getElementById("pratica").value;
    var foco = document.getElementById("foco").value;

    const praticaNova = {
        data: data,
        tempo: tempo,
        pratica: pratica,
        foco: foco,
    };

    db.ref('praticas').push(praticaNova)
        .then(() => {
            alert("Registrado com sucesso! ");
            document.getElementById('data').value = '';
            document.getElementById('tempo').value = '';
            document.getElementById('pratica').value = '';
            document.getElementById('foco').value = '';
        });
 }
