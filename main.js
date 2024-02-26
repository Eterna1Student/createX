const burger = document.getElementById('burger')
const burgerBtn = document.getElementById('burgerBtn')


// ==================================BURGER===================================

burgerBtn.addEventListener('click', () => {
    burger.classList.add('burger_active')
})

burger.addEventListener('click', () => {
    burger.classList.remove('burger_active')
})