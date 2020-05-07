const questionSection = document.getElementById('section-b');
const startQuizBtn = document.getElementById('section-a');
const eachQuestion = document.getElementById('question');
const nextBtn = document.getElementById('next');
const options = document.getElementById('main-quiz-container').children;
const quizOverText1 = document.getElementById('over-text-1');
const quizOverText2 = document.getElementById('over-text-2');

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startQuizBtn.classList.add('hide');
    questionSection.classList.remove('hide');
    quizBody(questionsCounter);
}

function restartQuiz() {
    document.getElementById('quiz-over').classList.add('hide');
    questionSection.classList.remove('hide');
    nextBtn.classList.add('hide');
    questionsCounter = 0;
    quizBody(questionsCounter);
}

let question;
let option;

let questions = [{
        question: "1. Who is the Cordinator of Hng?",
        options: [
            "Motun",
            "Chris",
            "Xyluz"
        ],
        answer: 2
    },
    {
        question: "2. Who is the founder of Hng?",
        options: [
            "Jeff",
            "Phileo",
            "Mark"
        ],
        answer: 2
    },
    {
        question: "3. Who is the CEO Of twitter?",
        options: [
            "Mark",
            "Jack",
            "Simon"
        ],
        answer: 1
    },
    {
        question: "4. Which of these is a mobile Os?",
        options: [
            "Ubuntu",
            "Android",
            "Office"
        ],
        answer: 1
    },
    {
        question: "5. Which of these is a search engine?",
        options: [
            "Google",
            "Twitter",
            "Facebook"
        ],
        answer: 0
    },
];

function quizBody(index) {
    question = eachQuestion.innerHTML = questions[index].question;
    option = document.getElementById('0').innerHTML = 'a. ' + questions[index].options[0]
    option = document.getElementById('1').innerHTML = 'b. ' + questions[index].options[1];
    option = document.getElementById('2').innerHTML = 'c. ' + questions[index].options[2];
    //questionsAnswered = document.getElementById('q-c').innerHTML = questionsCounter + '/' + questions.length;
    score = document.getElementById('s-c').innerHTML = 'Score: ' + scoreCounter;
}
let score;
let scoreCounter = 0;
let questionsAnswered;
let questionsCounter = 0;

function choose(element) {
    for (let i = 0; i < questions.length; i++) {
        if (questionsCounter == i && element.id == questions[i].answer) {
            scoreCounter += 1;
            score = document.getElementById('s-c').innerHTML = 'Score: ' + scoreCounter;
        } else {
            element.classList.remove('options');
            element.classList.add('wrong');
            score = document.getElementById('s-c').innerHTML = 'Score: ' + scoreCounter;
        }
    }
    lockOptions();
}

function lockOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        nextBtn.classList.remove('hide');
        if (options[i].id == questions[questionsCounter].answer) {
            options[i].classList.add('correct');
            options[i].classList.remove('wrong');
        }
    }
}

function quizOver() {
    questionSection.classList.add('hide');
    document.getElementById('quiz-over').classList.remove('hide');
    if (scoreCounter <= 2) {
        quizOverText1.innerHTML = 'You Failed';
        quizOverText2.innerHTML = 'You Scored ' + scoreCounter;
    } else if (scoreCounter <= 3) {
        quizOverText1.innerHTML = 'Nice Try';
        quizOverText2.innerHTML = 'You Scored ' + scoreCounter;
    } else {
        quizOverText1.innerHTML = 'Cheers!!!';
        quizOverText2.innerHTML = 'You Scored ' + scoreCounter;
    }
}

function next() {
    if (questionsCounter == questions.length - 1) {
        quizOver();
        scoreCounter = 0;
    } else if (questionsCounter < questions.length - 1) {
        nextBtn.classList.add('hide');
        questionsCounter += 1;
        quizBody(questionsCounter);
    }
    document.getElementById('0').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('0').classList.add('options');
    document.getElementById('1').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('1').classList.add('options');
    document.getElementById('2').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('2').classList.add('options');
};
