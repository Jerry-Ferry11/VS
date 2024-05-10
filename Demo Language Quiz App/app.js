const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('questions');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

let currentQuestionIndex = 0;
let scores = 0;

const questions = [
    {
        question: 'What is the capital of Nigeria?',
        options: ['Lagos', 'Abuja', 'Kano', 'Ibadan'],
        correctAnswer: 'Abuja'
    },
   
    {
        question: 'What is the capital of Lagos?',
        options: ['Lagos', 'Abuja', 'Kano', 'Ikeja'],
        correctAnswer: 'Ikeja'
    }
];


function loadQuestion() {
    console.log("Loading question...");
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.onclick = checkAnswer; // Move the onclick event to each option
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(event) {
    console.log("Checking answer...");
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        scores++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Call loadQuestion to load the next question
    } else {
        showResult(); // Show result only when all questions are answered
    }
}

loadQuestion();


function showResult() {
    quizContainer.innerHTML = '<h2>Your Score: </h2>' + scores + '/' + questions.length;
}

function submitQuiz() {
    // Additional logic for submitting quiz data
}

loadQuestion();