let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu1')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu1')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu1')
})

