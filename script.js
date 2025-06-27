const toggleContrast = () => {
  const body = document.body;
  const temaAtual = body.getAttribute("data-theme");
  if (temaAtual === "high-contrast") {
    body.setAttribute("data-theme", "low-contrast");
  } else {
    body.setAttribute("data-theme", "high-contrast");
  }
}

let tamanhoFonteAtual = 100;
const passo = 10;

function ajustarFonte() {
  document.querySelector('main').style.fontSize = `${tamanhoFonteAtual}%`;
}

function aumentarFonte() {
  if (tamanhoFonteAtual < 200) {
    tamanhoFonteAtual += passo;
    ajustarFonte();
  }
}

function diminuirFonte() {
  if (tamanhoFonteAtual > 50) {
    tamanhoFonteAtual -= passo;
    ajustarFonte();
  }
}

window.onload = ajustarFonte;