const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


const projectButton = document.querySelector('.expand-button');
const projectDetails = document.querySelector('.project-card-details');

projectButton.addEventListener('click', () => {
    projectDetails.classList.toggle('active')
})