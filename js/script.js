// Espera a página carregar
window.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".lumi");

  let atual = true;

  setInterval(() => {
    if (atual) {
      img.src = "img/Lumi2.png";
    } else {
      img.src = "img/Lumi.png";
    }
    atual = !atual;
  }, 1000); // troca a cada 1000ms = 1 segundo
});
