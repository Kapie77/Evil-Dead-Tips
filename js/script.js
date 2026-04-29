/* Ir para alguma página */
function goTo(page) {
  window.location.href = page;
}

/* Botão "Voltar" */
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "../characters.html"; // fallback
  }
}