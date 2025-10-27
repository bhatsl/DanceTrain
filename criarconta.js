function cadastrar(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var telefone = document.getElementById("telefone").value;
    var usuario = document.getElementById("usuario").value;
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    const usuarioNovo = {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        usuario: usuario,
        email: email,
        senha: senha
    };

    db.ref('usuarios').push(usuarioNovo)
        .then(() => {
            alert("Registrado com sucesso! ");
            document.getElementById('nome').value = '';
            document.getElementById('sobrenome').value = '';
            document.getElementById('telefone').value = '';
            document.getElementById('usuario').value = '';
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
        });

}