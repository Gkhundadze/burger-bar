let burger = document.querySelector('.burger-button');
let burgerTwo = document.querySelector('.burger-button-second');
burger.addEventListener('click', () => {
 burger.classList.toggle('open')
    
})
burgerTwo.addEventListener('click', () => {
    burgerTwo.classList.toggle('clicked')
})