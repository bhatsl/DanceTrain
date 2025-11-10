function cadastrar() {
    var data = document.getElementById("data").value;
    var nome = document.getElementById("nome").value;
    var estilo = document.getElementById("estilo").value;
    var anotacoes = document.getElementById("anotacoes").value;

    const aulaNova = {
        data: data,
        nome: nome,
        estilo: estilo,
        anotacoes: anotacoes,
    };

    db.ref('aulas').push(aulaNova)
        .then(() => {
            alert("Registrado com sucesso! ");
            document.getElementById('data').value = '';
            document.getElementById('nome').value = '';
            document.getElementById('estilo').value = '';
            document.getElementById('anotacoes').value = '';
        });
 }
