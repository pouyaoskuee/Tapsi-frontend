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



const tabs = document.querySelectorAll(".tabs__tab");
const tabContents = document.querySelectorAll(".tabs__result__content");



tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

        // REMOVE PREVIOUS ACTIVED CLASSES
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

        // ADD NEW ACTIVE CLASSES
        tab.classList.add("active");
        targeTabContent.classList.add("active");
    });
});





