let fisrtName = document.getElementById('name')
let lastName = document.getElementById('lastName')
let mail = document.getElementById('mail')
let textArea = document.getElementById('else')
let check1 = document.getElementById('checkName')
let check2 = document.getElementById('checkLast')
let check3 = document.getElementById('checkmail')
let form = document.querySelector('form')
let msgv = document.querySelector('h2')
const sendBtn = document.getElementById('sendBtn')

sendBtn.addEventListener('click', function () {
    if (fisrtName.value.length <= 2) {
        fisrtName.id = 'active1'
        check1.style.display = 'block'
    } else if (lastName.value.length <= 2) {
        lastName.id = 'active1'
        check2.style.display = 'block'
    } else if (!mail.value.includes('@') || !mail.value.includes('.') || mail.value[mail.value.length - 1] == '.' || mail.value[mail.value.length - 1] == '@' || mail.value[0] == '@' || mail.value[0] == '.') {
        mail.id = 'active1'
        check3.style.display = 'block'
    } else if (textArea.value.length <= 2) {
        textArea.id = 'active1'
    } else {
        form.classList.add('form')
        msgv.classList.add('msgboxx')
        let removeF = function () {
            fisrtName.value = ""
            lastName.value = ""
            mail.value = ""
            textArea.value = ""
            form.classList.remove('form')
            msgv.classList.remove('msgboxx')
        }
        setTimeout(removeF, 4000);
    }

})

fisrtName.addEventListener('click', function () {
    fisrtName.removeAttribute('id');
    check1.style.display = 'none'
})

lastName.addEventListener('click', function () {
    lastName.removeAttribute('id');
    check2.style.display = 'none'
})

mail.addEventListener('click', function () {
    mail.removeAttribute('id');
    check3.style.display = 'none'
})
textArea.addEventListener('click', function () {
    textArea.removeAttribute('id');
})
