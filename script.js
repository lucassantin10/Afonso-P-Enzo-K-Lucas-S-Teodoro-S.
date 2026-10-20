
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", aberto);
});
menu.addEventListener("click", () => menu.classList.remove("is-open"));


const slides = document.querySelectorAll(".slide");
const contador = document.getElementById("count");
let atual = 0;

function mostrar(i) {
  atual = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle("is-active", n === atual));
  contador.textContent = (atual + 1) + " / " + slides.length;
}
document.getElementById("prev").onclick = () => mostrar(atual - 1);
document.getElementById("next").onclick = () => mostrar(atual + 1);


const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formOk").hidden = false;
  form.reset();
});