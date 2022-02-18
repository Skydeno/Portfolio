const togglerButton = document.getElementsByClassName('toggler-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

togglerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});


const navbarItem = document.querySelectorAll(".nav-item");

navbarItem.forEach(function(item){
    item.addEventListener('click', () => {
        if(navbarLinks.classList.contains('active')) {
            navbarLinks.classList.toggle('active');
        }
    })
});
