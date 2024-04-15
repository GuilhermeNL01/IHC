function validateForm() {
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
  
    var nomeError = document.getElementById("nomeError");
    var enderecoError = document.getElementById("enderecoError");
    var cidadeError = document.getElementById("cidadeError");
    var estadoError = document.getElementById("estadoError");
  
    nomeError.innerHTML =
      enderecoError.innerHTML =
      cidadeError.innerHTML =
      estadoError.innerHTML =
        "";
  
    var isValid = true;
  
    if (nome === "") {
      nomeError.innerHTML = "Por favor, preencha o nome";
      isValid = false;
    }
  
    if (endereco === "") {
      enderecoError.innerHTML = "Por favor, preencha o endereço";
      isValid = false;
    }
  
    if (cidade === "") {
      cidadeError.innerHTML = "Por favor, preencha a cidade";
      isValid = false;
    }
  
    if (estado === "") {
      estadoError.innerHTML = "Por favor, selecione o estado";
      isValid = false;
    }
  
    if (isValid) {
      // Redirecionamento para a página inicial após 3 segundos
      setTimeout(function() {
        window.location.href = "index.html";
      }, 3000);
  
      // Exibição de mensagem de sucesso na página inicial
      var sucessoMensagem = document.createElement("div");
      sucessoMensagem.classList.add("success");
      sucessoMensagem.innerHTML = "Formulário enviado com sucesso!";
      document.body.appendChild(sucessoMensagem);
  
      // Limpar formulário
      document.getElementById("cadastroForm").reset();
  
      return false; // Evitar que o formulário seja enviado normalmente
    } else {
      return false;
    }
  }
  