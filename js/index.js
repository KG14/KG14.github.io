document.addEventListener('DOMContentLoaded', function() {
   
    // Get "navbar-burger" element
    burger = document.querySelector('.navbar-burger')

    burger.addEventListener('click', () => {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        burger.classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('is-active');

    })
});

function showInfo(icon) {
    parent = icon.parentElement.parentElement.parentElement;

    // Check state
    if (parent.querySelector('.more-info').style.display == 'block') {
        parent.querySelector('.more-info').style.display = 'none';
        icon.querySelector("i").classList.remove("more-info-btn-active");
    }
    else {
        parent.querySelector('.more-info').style.display = 'block';
        icon.querySelector("i").classList.add("more-info-btn-active");
    }
}

function scrollSection(id, position) {
    document.querySelector(id).scrollIntoView(position);
}