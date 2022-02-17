const togglerButton = document.getElementsByClassName('toggler-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});


const navbarItem = document.querySelectorAll('.nav-item')[0]
const navbarItem1 = document.querySelectorAll('.nav-item1')[0]
const navbarItem2 = document.querySelectorAll('.nav-item2')[0]

navbarItem.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')) {
        navbarLinks.classList.toggle('active');
    }
});

navbarItem1.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')) {
        navbarLinks.classList.toggle('active');
    }
});

navbarItem2.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')) {
        navbarLinks.classList.toggle('active');
    }
});