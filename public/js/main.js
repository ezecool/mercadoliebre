const abrirBurguer = document.querySelector('#abrir-burguer');
const cerrarBurguer = document.querySelector('#cerrar-burguer');
const nav = document.querySelector('#nav');

abrirBurguer.addEventListener('click', () => {
  nav.classList.add('visible');
});

cerrarBurguer.addEventListener('click', () => {
  nav.classList.remove('visible');
})