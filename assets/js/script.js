// event toggle navbar
const navExpandToggle = document.getElementById('nav_expand_toggle');
const navMenuExpand = document.getElementById('nav_expand_menu');
const navClose = document.getElementById('close');

navExpandToggle.addEventListener('click', function() {
    navMenuExpand.classList.remove('hide');
});
navClose.addEventListener('click', function() {
    navMenuExpand.classList.add('hide');
})


// styling for every anchor element
const anchors = document.querySelectorAll('ul li a');
anchors.forEach(a => {
    a.style.color = "#DBCBBD";
    a.style.textDecoration = "none";
});


// toggle image gallery
const gallery = document.querySelectorAll('.gallery div img.hide');
const toggleImg = document.getElementById('toggle_img');
toggleImg.addEventListener('click', function() {
    gallery.forEach(img => {
        img.classList.toggle('hide');
    });

    toggleImg.classList.toggle('more');
    if (!toggleImg.classList.contains('more')) {
        toggleImg.textContent = 'Lihat Lebih Sedikit';
    } else {
        toggleImg.textContent = 'Lihat Lebih Banyak';
    }
});


// carousel for testimonials card
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
const testimonialsCards = document.querySelectorAll('.testimonials-card');
let i = 0;

function iterator(n) {
    testimonialsCards.forEach(card => {
        if (card.classList.contains('show')) {
            card.classList.remove('show')
        }
    });
    testimonialsCards[n].classList.add('show');
}

testimonialsWrapper.addEventListener('click', function(e) {
    if (e.target.getAttribute('id') === 'prev') {
        i--;
        if (i < 0) {i = testimonialsCards.length - 1};
        iterator(i);
    }

    if (e.target.getAttribute('id') === 'next') {
        i++;
        if (i > testimonialsCards.length - 1) {i = 0};
        iterator(i);
    }
});