const toggleContrast = () => {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "high-contrast") {
    body.setAttribute("data-theme", "low-contrast");
  } else {
    body.setAttribute("data-theme", "high-contrast");
  }
}

let tamanhoFonteAtual = 120; // porcentagem (100% é o padrão)
const passo = 10; // incremento em %

function ajustarFonte() {
  document.querySelector('main').style.fontSize = `${tamanhoFonteAtual}%`;
}

function aumentarFonte() {
  if (tamanhoFonteAtual < 200) { // limite superior
    tamanhoFonteAtual += passo;
    ajustarFonte();
  }
}

function diminuirFonte() {
  if (tamanhoFonteAtual > 50) { // limite inferior
    tamanhoFonteAtual -= passo;
    ajustarFonte();
  }
}

// Ajusta ao carregar a página
window.onload = ajustarFonte;

//forms contato
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Formulário enviado com sucesso!');
  document.getElementById('form').reset();
});
