// script.js

// Exibe uma mensagem de boas-vindas ao carregar a página inicial
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("index.html")) {
      alert("Bem-vindo à Aventura Interativa! Prepare-se para a jornada.");
    }
  });
  
  // Função para confirmar a escolha de caminhos
  function confirmarEscolha(mensagem, destino) {
    const confirmacao = confirm(mensagem);
    if (confirmacao) {
      window.location.href = destino;
    }
  }
  