function cadastrar(event) {
    event.preventDefault();

    var data = document.getElementById("data_da_aula").value;
    var nome = document.getElementById("nome_da_aula").value;
    var estilo = document.getElementById("estilo_de_dança").value;
    var anotacoes = document.getElementById("anotações").value;

    const aulaNova = {
        data: data_da_aula,
        nome: nome_da_aula,
        estilo: estilo_de_dança,
        anotacoes: anotações,
    };

    db.ref('aulas').push(aulaNova)
        .then(() => {
            alert("Registrado com sucesso! ");
            document.getElementById('data_da_aula').value = '';
            document.getElementById('nome_da_aula').value = '';
            document.getElementById('estilo_de_dança').value = '';
            document.getElementById('anotações').value = '';
        });
 }
