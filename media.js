const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
let imges = document.querySelectorAll('.flexbox img')
imges.forEach(ele => ele.addEventListener('click', function () {
    lightbox.classList.add('active')
    let popImg = document.createElement('img')
    popImg.src = ele.src
    popImg.className = 'popImg'
    let text = document.createElement('div')
    text.id = 'text'
    text.innerHTML = ele.alt
    while (lightbox.lastChild && lightbox.firstChild) {
        lightbox.removeChild(lightbox.lastChild) && lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(popImg)
    lightbox.appendChild(text)
}))

lightbox.addEventListener('click', e => e.currentTarget == e.target ? lightbox.classList.remove('active') : "")
