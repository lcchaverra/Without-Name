// Botón Hamburguesa
const button = document.getElementById('burguer');
const mainMenu = document.getElementById('menu')
button.addEventListener('click', ()=>{
    button.classList.toggle('active')
    mainMenu.classList.toggle('active')
}) 