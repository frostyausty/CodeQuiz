var startButton = document.getElementById('startBtn');
var quizBox = document.getElementById('quiz');
var startSection = document.getElementById('start');
var questionEl = document.getElementById('question');

var questions = [
    {
        q: 'Commonly used data types DO NOT include:', 
        a: 'alerts',
        b: ['strings', 'booleans', 'numbers', 'alerts']
    },
    {
        q: 'The condition in an if / else statement is enclosed within ____.',
        a: 'parentheses',
        b: ['quotes', 'curly brackets', 'parentheses', 'square brackets']
    },
    {
        q: 'Arrays in JavaScript can be used to store ____.',
        a: 'all of the above',
        b: ['numbers and strings', 'other arrays', 'booleans', 'all of the above']
    },
    {
        q: 'String values must be enclosed within ____ when being assigned to variables',
        a: 'quotes',
        b: ['commas', 'curly brackets', 'quotes', 'parentheses']
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: 'console.log',
        b: ['JavaScript', 'terminal/bash', 'for loops', 'console.log']
    }
]

function startQuiz() {
    console.log('start game');
    startSection.classList.add('hide');
    quizBox.classList.remove('hide');
    nextQuestion()
}

function nextQuestion() {
    document.getElementById('question').textContent = questions[0].q;
    document.getElementById('btn1').textContent = questions[0].b[0];
    document.getElementById('btn2').textContent = questions[0].b[1];
    document.getElementById('btn3').textContent = questions[0].b[2];
    document.getElementById('btn4').textContent = questions[0].b[3];
    

}

function userAnswer() {

}

startButton.addEventListener('click', startQuiz);
