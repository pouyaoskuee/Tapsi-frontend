const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const hamburger_one = document.querySelector('.hamburger__one');
const hamburger_two = document.querySelector('.hamburger__two');
const hamburger_three = document.querySelector('.hamburger__three');





hamburger.addEventListener('click', open_menu)


function open_menu() {
    menu.classList.toggle('open');
    hamburger_two.classList.toggle('opacity-two',);
    hamburger_one.classList.toggle('rotation-one');
    hamburger_three.classList.toggle('rotation-three');

}