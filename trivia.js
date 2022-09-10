
let startBtn = document.querySelector(".btn_game")
let boxTrivia = document.querySelector('.boxTrivia')
let boxOpen = document.querySelector('.boxQ')
let FinalScoreBox = document.querySelector('.FinalScoreBox')

let q1 = ['Where was the first known carnival celebration?', 4, 'Italy', 'Spain', 'France', 'UK']
let q2 = ['What is the signature Mardi Gras dessert?', 2, 'Cake', 'Pizza', 'Shawerma', 'Burger']
let q3 = ['What does purple signify during Mardi Gras?', 3, 'Style', 'Justice', 'Power', 'Love']
let q4 = ['What does green signify during Mardi Gras?', 2, 'Faith', 'Justice', 'Power', 'Love']
let q5 = ['What does gold signify during Mardi Gras?', 5, 'Justice', 'Faith', 'Love', 'Power']
let q6 = ['When was the first known Mardi Gras parade?', 4, '2020', '1992', '1837', '1937']
let q7 = ['Which Italian city is famous for celebrations?', 2, 'Venice', 'Rome', 'Milan', 'Turin']
let q8 = ['When was the earliest known carnival celebration?', 5, '1907', '1729', '829', '1294']
let q9 = ['Bacchus is the Roman god of what?', 3, 'Cola', 'Wine', 'Water', 'Fire']
let q10 = ['The success of a Mardi Gras parade is measured in what?', 3, 'USD', 'Trash', 'EURO', 'Bound']


let quizArry = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
let current = -1;
let score = 0;
let btn1, btn2, btn3, btn4

btn1 = document.querySelector('#btn1')
btn2 = document.querySelector('#btn2')
btn3 = document.querySelector('#btn3')
btn4 = document.querySelector('#btn4')

startBtn.addEventListener('click', function () {
    TimeOutF()
    boxTrivia.classList.add('active')
    boxOpen.classList.add('active')
})

let TimeOutF = function decalerQuiz() {

    current++
    if (quizArry.length <= current) {
        let FinalScoreBoxTime = function () {
            FinalScoreBox.style.display = 'block';
            FinalScoreBox.innerHTML = `Your Score  ${score}/50`;
        }
        current = -1
        boxOpen.classList.remove('active')
        setTimeout(function () {
            boxTrivia.classList.remove('active')
            FinalScoreBox.style.display = 'none';
        }, 4500)
        FinalScoreBoxTime()
        score = 0
    }
    btn1.style.backgroundColor = "var(--yellow-color)";
    btn2.style.backgroundColor = "var(--purple-color)";
    btn3.style.backgroundColor = "var(--black-color)";
    btn4.style.backgroundColor = "var(--green-color)";

    document.querySelector('#id_question').innerHTML = quizArry[current][0]
    document.querySelector('#btn1').innerHTML = quizArry[current][2]
    document.querySelector('#btn2').innerHTML = quizArry[current][3]
    document.querySelector('#btn3').innerHTML = quizArry[current][4]
    document.querySelector('#btn4').innerHTML = quizArry[current][5]
    document.querySelector('#idscore').innerHTML = score
}

btn1.addEventListener('click', function () {
    if (quizArry[current][1] === 2) {
        score += 5;
        btn1.style.backgroundColor = "#44B35E";
    } else {
        btn1.style.backgroundColor = "red";
    }
    setTimeout(TimeOutF, 500)
})

btn2.addEventListener('click', function () {
    if (quizArry[current][1] === 3) {
        score += 5;
        btn2.style.backgroundColor = "#44B35E";
    } else {
        btn2.style.backgroundColor = "red";
    }
    setTimeout(TimeOutF, 500)
})

btn3.addEventListener('click', function () {
    if (quizArry[current][1] === 4) {
        score += 5;
        btn3.style.backgroundColor = "#44B35E";
    } else {
        btn3.style.backgroundColor = "red";
    }
    setTimeout(TimeOutF, 500)
})

btn4.addEventListener('click', function () {
    if (quizArry[current][1] === 5) {
        score += 5;
        btn4.style.backgroundColor = "#44B35E";
    } else {
        btn4.style.backgroundColor = "red";
    }
    setTimeout(TimeOutF, 500)
})
