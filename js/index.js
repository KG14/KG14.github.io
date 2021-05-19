document.addEventListener('DOMContentLoaded', function() {
});

function showInfo(icon) {
    parent = icon.parentElement.parentElement.parentElement;

    // Check state
    if (parent.querySelector('.more-info').style.display == 'block') {
        parent.querySelector('.more-info').style.display = 'none';
    }
    else {
        parent.querySelector('.more-info').style.display = 'block';
    }
}

function scrollSection(id, position) {
    document.querySelector(id).scrollIntoView(position);
}