const btnMore = document.querySelector("#btnShowMore")
const showMore = document.querySelector('.hidden')
let showMore1 = false;
btnMore.addEventListener('click', function () {
    if (!showMore1) {
        showMore.classList.add('opens')
        btnMore.innerHTML = 'Less'
        showMore1 = true
    } else {
        showMore.classList.remove('opens')
        btnMore.innerHTML = 'Show More'
        showMore1 = false
    }
})
