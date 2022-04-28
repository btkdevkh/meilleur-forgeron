const menuBurger = document.querySelector('.menu__burger')
const navMenu = document.querySelector('.nav__menu')

menuBurger.addEventListener('click', e => {
  navMenu.classList.toggle('active')
  menuBurger.classList.toggle('active')
})
