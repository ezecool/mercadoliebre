const abrirBurger = document.querySelector('#abrir-burger');
const cerrarBurger = document.querySelector('#cerrar-burger');
const nav = document.querySelector('#nav');

abrirBurger.addEventListener('click', () => {
  nav.classList.add('visible');
});

cerrarBurger.addEventListener('click', () => {
  nav.classList.remove('visible');
})