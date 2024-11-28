let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menuh')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menul')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menul')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menul')
})
