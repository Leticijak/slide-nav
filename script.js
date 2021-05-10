const open_btn = document.querySelector('.openz-btn')
const close_btn = document.querySelector('.close-btn')

const navi = document.querySelectorAll('.navi')

open_btn.addEventListener('click', () => {
  navi.forEach((nav_el) => nav_el.classList.add('vidljivo'))
})

close_btn.addEventListener('click', () => {
  navi.forEach((nav_el) => nav_el.classList.remove('vidljivo'))
})
