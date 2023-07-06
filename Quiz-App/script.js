const quizData = [
    {
        question: "PM of India ?",
        a: 'Modi Ji',
        b: 'Yogi Ji',
        c: 'Shah Ji',
        d: 'Gadkari Ji',
        correct: 'a'
    },
    {
        question: "HM of India ?",
        a: 'Modi Ji',
        b: 'Yogi Ji',
        c: 'Shah Ji',
        d: 'Gadkari Ji',
        correct: 'c'
    },
    {
        question: "CM of Odisha ?",
        a: 'Modi Ji',
        b: 'Yogi Ji',
        c: 'Naveen Ji',
        d: 'Gadkari Ji',
        correct: 'c'
    },
    {
        question: "CM of UttarPradesh ?",
        a: 'Modi Ji',
        b: 'Yogi Ji',
        c: 'Shah Ji',
        d: 'Gadkari Ji',
        correct: 'b'
    },
    {
        question: "Minister of road transport and Highways ?",
        a: 'Modi Ji',
        b: 'Yogi Ji',
        c: 'Shah Ji',
        d: 'Gadkari Ji',
        correct: 'd'
    },
];

const answerElements = document.querySelectorAll('.answer');

const currQuestion = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitbtn');
const quizScore = document.getElementById('quizScore');

let currentQuestionNumber = 0;

function loadQuiz() {
    deselectPreviousAnswers();

    const currentQuizData = quizData[currentQuestionNumber];

    currQuestion.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz(); //Fires itself for first time during load

function getSelectedOption() {
    // If element is selected then return that id else return undefined

    const answerElements = document.querySelectorAll('.answer');

    let selectedoption = undefined;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked === true) {
            selectedoption = answerElement.id;
        }
    });
    return selectedoption;
}

function deselectPreviousAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

// Everytime when submitbutton will be clicked next question will appear.
let score = 0;
submitBtn.addEventListener('click', (e) => {
    let selectedOption = getSelectedOption();

    if (selectedOption) {
        if (selectedOption === quizData[currentQuestionNumber].correct) {
            score++;
            // console.log(score);
        }
        currentQuestionNumber++;
        if (currentQuestionNumber < quizData.length) {
            loadQuiz();
        } else {
            quizScore.innerHTML = `<h2 id="score">You answered correctly at &nbsp;<span>${score}</span>&nbsp;/&nbsp;<span>${quizData.length}</span>&nbsp;questions.</h2> <button onClick="location.reload()" style="">Reload</button>`
        }
    }
})

