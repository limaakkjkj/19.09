// Função para confirmar o nome de usuário e senha e armazená-los na sessão
function confirmarCredenciais() {
    const nomeUsuario = document.getElementById("nomeUsuarioInput").value;
    const senha = document.getElementById("senhaInput").value;
    
    if (nomeUsuario.trim() !== "" && senha.trim() !== "") {
        // Armazena o nome de usuário na sessão
        sessionStorage.setItem("nomeUsuario", nomeUsuario);

        // Esconde a tela de entrada e mostra a tela de confirmação
        document.getElementById("tela1").style.display = "none";
        document.getElementById("tela2").style.display = "block";

        // Exibe o nome de usuário confirmado na segunda tela
        document.getElementById("nomeUsuarioConfirmado").textContent = nomeUsuario;
    } else {
        alert("Por favor, informe nome de usuário e senha.");
    }
}


// Função para adicionar outro nome de usuário
function adicionarOutroNome() {
    // Limpa os campos de nome de usuário e senha
    document.getElementById("nomeUsuarioInput").value = "";
    document.getElementById("senhaInput").value = "";
    
    // Esconde a tela de confirmação
    document.getElementById("tela2").style.display = "none";
    
    // Mostra a tela de entrada novamente
    document.getElementById("tela1").style.display = "block";
}
