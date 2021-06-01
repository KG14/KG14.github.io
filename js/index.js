document.addEventListener('DOMContentLoaded', function() {
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