// Total number of quotes
let totalQuotes = 4;

// Index of current quote
var currentQuote = 0;

document.addEventListener('DOMContentLoaded', function() {

    let leftQuoteButton = document.querySelector('#left-quote-btn');
    let rightQuoteButton = document.querySelector('#right-quote-btn');

    let carousel = document.querySelector('#quotes-carousel');
    let quotes = Array.from(carousel.children);

    // Get "navbar-burger" element
    let burger = document.querySelector('.navbar-burger')

    burger.addEventListener('click', () => {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        burger.classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('is-active');

    })

    leftQuoteButton.addEventListener('click', () => {
        if (currentQuote == 0) {
            currentQuote = totalQuotes - 1
            scrollCarousel(`#${quotes[currentQuote].id}`)
        }
        else {
            currentQuote -= 1;
            scrollCarousel(`#${quotes[currentQuote].id}`)
        }
    })

    rightQuoteButton.addEventListener('click', () => {
        if (currentQuote == totalQuotes - 1) {
            currentQuote = 0
            scrollCarousel(`#${quotes[currentQuote].id}`)
        }
        else {
            currentQuote += 1;
            scrollCarousel(`#${quotes[currentQuote].id}`)
        }
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

function scrollCarousel(id) {
    console.log(typeof(id))
    document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
    console.log("ran")
}

function continuousCarouselScroll() {
    carousel = document.querySelector('#quotes-carousel');
    quotes = Array.from(carousel.children);

    index = 0;
    while (true) {
        if (index > 2) {
            index = 0
        }

        
        setTimeout(function() {
            scrollCarousel(`#${quotes[index].id}`);
        }, 2);
    }
}
