let burger = document.querySelector('.burger-button');
let burgerTwo = document.querySelector('.burger-button-second');
let themeSwitcher = document.querySelector('#checkbox');
let switchedLabel = document.querySelector('.chackbox-label')
burger.addEventListener('click', () => {
 burger.classList.toggle('open')
    
})
burgerTwo.addEventListener('click', () => {
    burgerTwo.classList.toggle('clicked')
})
themeSwitcher.addEventListener('change', ()=> {
    switchedLabel.classList.toggle('checked')
    document.body.classList.toggle('dark')
})