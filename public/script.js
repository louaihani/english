
function showSection(sectionId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('landing-page'); 
});

function startMeeting() {
    alert('سيتم بدء الاجتماع الآن!');
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
}

window.addEventListener('resize', function(event) {
    var width = window.innerWidth;
    const navUl = document.querySelector('nav ul');

    if(width > 576) {
        navUl.style.display = 'flex';
    } 
});