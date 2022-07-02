const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');


//Toggle navigation
const toggleMenu = () => {
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);
