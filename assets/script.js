var startButton = document.getElementById('startBtn');
var quizBox = document.getElementById('quiz');
var startSection = document.getElementById('start');
var questionEl = document.getElementById('question');
var questionNumber = 0;
var userAnswerEl = document.querySelector(".answers");
var highScoreEl = 0;
var highScoreDisplay = document.getElementById('highscore');



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
    startSection.classList.add('hide');
    quizBox.classList.remove('hide');
    nextQuestion()
}

function nextQuestion() {
    document.getElementById('question').textContent = questions[questionNumber].q;
    document.getElementById('btn1').textContent = questions[questionNumber].b[0];
    document.getElementById('btn2').textContent = questions[questionNumber].b[1];
    document.getElementById('btn3').textContent = questions[questionNumber].b[2];
    document.getElementById('btn4').textContent = questions[questionNumber].b[3];

    userAnswerEl.addEventListener('click', userAnswer);   
   // console.log(userAnswerEl);

    //userAnswer();
}

function userAnswer(event) {
    //console.log('hello')
    var userChoice = event.target;
   
    if (questions[questionNumber].a === userChoice.textContent){
        document.getElementById('result').textContent = "Correct";
        console.log(document.getElementById('result'));
        highScoreEl = highScoreEl + 15;
        console.log(highScoreEl);
    }
    else { 
        document.getElementById('result').textContent = "Incorrect";
        console.log(document.getElementById('result'));
        console.log(highScoreEl);
}
        console.log(userChoice.textContent)
 //   var questionNumber = questions[]
nextQuestion(questionNumber++);

};

startButton.addEventListener('click', startQuiz);