// burger menu btn Start

const menuBtn = document.querySelector('.menuBtn')
const linksNav_id = document.querySelector('#linksNav_id')
const bodyOpen = document.body
const scroll = document.querySelector('.scroll-up')

let menuOpen = false;

menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        linksNav_id.classList.add('active')
        bodyOpen.classList.add('openn')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        linksNav_id.classList.remove('active')
        bodyOpen.classList.remove('openn')
        menuOpen = false;
    }
})

window.onload = function () {
    scroll.style.display = 'none'
}

window.onscroll = function () {
    if (window.pageYOffset >= 400) {
        scroll.style.display = 'flex'
    } else {
        scroll.style.display = 'none'
    }
}

scroll.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})













