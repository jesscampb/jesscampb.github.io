const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


function toggleProjectDetails(projectId){
    const details = document.getElementById(projectId);

    if (details.style.display === 'block'){
        details.style.display = 'none';
    }
    else{
        details.style.display = 'block';
    }
}