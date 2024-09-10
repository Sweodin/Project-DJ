const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation__container');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

