const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


const projectButtons = document.querySelectorAll('.expand-button');
const projectDetails = document.querySelectorAll('.project-card-details');

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        projectDetails[index].classList.toggle('active')
    });
});