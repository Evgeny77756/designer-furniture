const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.site-nav')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active')
})
