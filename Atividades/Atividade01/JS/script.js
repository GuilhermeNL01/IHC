document.getElementById("menu-toggle").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    sidebar.style.opacity = "0"; /* Torna o menu invisível */
    sidebar.style.transform = "translateX(-100%)"; /* Move o menu para fora da tela */
  } else {
    sidebar.style.width = "250px";
    sidebar.style.opacity = "1"; /* Torna o menu visível */
    sidebar.style.transform = "translateX(0)"; /* Move o menu para a posição original */
  }
});
// Obtém a referência para o elemento do rodapé
const footer = document.querySelector('footer');

// Cria um novo elemento de parágrafo para mostrar a data
const dateParagraph = document.createElement('p');

// Obtém a data atual e formata para o formato "dd/mm/aaaa"
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('pt-BR');

// Define o texto do parágrafo com a data formatada
dateParagraph.textContent = 'Data atual: ' + formattedDate;

// Adiciona o parágrafo ao rodapé
footer.appendChild(dateParagraph);
