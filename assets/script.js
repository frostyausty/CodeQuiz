var startButton = document.getElementById('startBtn');
var quizBox = document.getElementById('quiz');
var startSection = document.getElementById('start');
var endSection = document.getElementById('end');
var questionEl = document.getElementById('question');
var userAnswerEl = document.querySelector(".answers");
var highScoreDisplay = document.getElementById('highscore');
var submitScore = document.getElementById('initialsubmit');
var questionNumber = 0;
var highScoreEl = 0;
var timerMax = 70;
var timePass=0;

//quiz questions
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

//timer function takes total time subtracts the time that has passed, if it reaches 0 goes to endQuiz function
var timer = function() {
    timerTotal= timerMax - timePass;
    timePass++;
    document.getElementById('time').textContent=timerTotal;
    if (timerTotal <= 0){
        endQuiz();
    }
}

//start quiz function 
function startQuiz() {
    startSection.classList.add('hide');
    quizBox.classList.remove('hide');
    StartTime = setInterval(timer,1000);
    nextQuestion()
}

//function that calls the next question, places answer options in the buttons
function nextQuestion() {
    document.getElementById('question').textContent = questions[questionNumber].q;
    document.getElementById('btn1').textContent = questions[questionNumber].b[0];
    document.getElementById('btn2').textContent = questions[questionNumber].b[1];
    document.getElementById('btn3').textContent = questions[questionNumber].b[2];
    document.getElementById('btn4').textContent = questions[questionNumber].b[3];

    //stores the value that user clicks
    userAnswerEl.addEventListener('click', userAnswer);   
}
//checks the answer to see if its correct
function userAnswer(event) {
    var userChoice = event.target;
   // if the answer is equal to the 'a' in the corresponding question it is correct, adds 15 to the score otherwise subtracts 10 from the timer
    if (questions[questionNumber].a === userChoice.textContent){
        document.getElementById('result').textContent = "Correct";
         console.log(document.getElementById('result'));
        highScoreEl = highScoreEl + 15;
         console.log(highScoreEl);
    }
    else { 
        document.getElementById('result').textContent = "Incorrect";
        timerMax -=10;
          console.log(document.getElementById('result'));
          console.log(highScoreEl);
    }
    //checks to see if there are any more questions to display
    questionCheck();
};
//checks to see if user is on the last question, if so moves to the end page otherwise goes to the next question
function questionCheck(){
    if (questionNumber === (questions.length-1)){
        endQuiz();
    } else {
        nextQuestion(questionNumber++);
    }
};

// ends the quiz, displays user score
function endQuiz() {
    endSection.classList.remove('hide');
    document.getElementById('form').classList.remove('hide');
    quizBox.classList.add('hide');
    document.getElementById('score').textContent= "Your score is:  " + highScoreEl;
    clearInterval(StartTime);
    submitScore.addEventListener('click',submitInt);
}

//User submits their initials to match their highscore
var submitInt = function(){
    userInt = document.getElementById("input").value; 
    initial = localStorage.setItem("initials", JSON.stringify(userInt));
    finalScore = localStorage.setItem("final score", JSON.stringify(highScoreEl));
    console.log(finalScore);
}

var highScoreLoad = function(){
    highScoreInt = localStorage.getItem("initials", highScoreEl);
    highScoreScore = localStorage.getItem("final score", highScoreEl);
    highScoreInt = JSON.parse(highScoreInt);
    highScoreScore = JSON.parse(highScoreScore);
}

startButton.addEventListener('click', startQuiz);