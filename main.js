let burger = document.querySelector('.burger-button');
let burgerOpen = false;
let burgerTwo = document.querySelector('.burger-button-second');
let themeSwitcher = document.querySelector('#checkbox');
let switchedLabel = document.querySelector('.chackbox-label');
let themeRecognizer = document.querySelector('.theme-recognizer');
burger.addEventListener('click', () => {
 burger.classList.toggle('open')
 burgerOpen = true;
})
burgerTwo.addEventListener('click', () => {
    burgerTwo.classList.toggle('clicked')
})
themeSwitcher.addEventListener('change', ()=> {
    switchedLabel.classList.toggle('checked')
    document.body.classList.toggle('dark')
})
console.log(document.body.classList.value = 'dark');