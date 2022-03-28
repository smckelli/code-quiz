var quizWrapper = document.querySelector("#wrapper");
var askQuestion = document.querySelector("#ask-question");
var startButton = document.getElementById("game-start");
var result = document.createElement("div");
result.setAttribute("class", "answer-display");
var answers = document.querySelector("#answers");
var footer = document.querySelector("#footer");
var initials = document.getElementById("initials");

var startTime = 60;
var time = startTime;
var intervalId;
var timer = document.getElementById("timer");
timer.innerText = time;
var questCount = 0;


// The quiz questions were obtained from the W3 Schools JavaScript Quiz.

// W3 Schools. 1999-2022. JavaScript Quiz. https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS


var questArr = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<js>",
        choiceB: "<script>",
        choiceC: "<scripting>",
        choiceD: "<javascript>",
        rightAnswer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA: "The <body> section",
        choiceB: "The <head> section",
        choiceC: "The <footer> section",
        choiceD: "Both A and B are correct",
        rightAnswer: "Both A and B are correct"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choiceA: "msg('Hello World');",
        choiceB: "alert('Hello World');",
        choiceC: "msgBox('Hello World');",
        choiceD: "alertBox('Hello World');",
        rightAnswer: "alert('Hello World');"
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "function myFunction()",
        choiceB: "abracaFunction()",
        choiceC: "function = myFunction()",
        choiceD: "function:myFunction()",
        rightAnswer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choiceA: "call myFunction()",
        choiceB: "abracaFunction()",
        choiceC: "myFunction()",
        choiceD: "call function myFunction()",
        rightAnswer: "myFunction()"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choiceA: "'This is a comment",
        choiceB: "//This is a comment",
        choiceC: "**This is a comment",
        choiceD: "<!--This is a comment-->",
        rightAnswer: "//This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choiceA: "var colors = ['red', 'green', 'blue']",
        choiceB: "var colors= (1:'red', 2:'green', 3:'blue')",
        choiceC: "var colors = 'red', 'green', 'blue'",
        choiceD: "var colors = 1= ('red'), 2 = ('green'), 3 = ('blue')",
        rightAnswer: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choiceA: "v carName;",
        choiceB: "variable carName;",
        choiceC: "abracarName;'",
        choiceD: "var carName;",
        rightAnswer: "var carName;"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choiceA: "-",
        choiceB: "=",
        choiceC: "X",
        choiceD: "*",
        rightAnswer: "="
    },
    {
        question: "What will the following code return: Boolean(10>9)",
        choiceA: "NaN",
        choiceB: "true",
        choiceC: "false",
        choiceD: "404 not found",
        rightAnswer: "true"
    },

];

// function for the inner workings of the quiz

var gameOver = function () {
    clearInterval(intervalId);
    clearQuiz();
    askQuestion.innerText = "All Done!";
    result.innerText = "Your score is " + time;

    var initials = prompt("What are your initials?");
    console.log(time);
    var champ = {'initals': initials , 'time': time };
    // if (champ) {
        localStorage.setItem('quizGoat', JSON.stringify(champ));
    //     location.assign("highscore.html");
    //     return;
    // }

    // champ = JSON.parse(champ);
    // console.log(champ);
    // champ.initials.push(initials);
    // champ.score.push(time);
    // console.log(initials, time, champ);

    // localStorage.setItem("quizGoat", JSON.stringify(champ));
    // location.assign("highscore.html");

    var playAgain = confirm("Want to play again?");
    if (playAgain) {
        window.location.reload();
    }
};

var checkAnswer = function (event) {
    var answerClick = event.target.innerText;
    if (answerClick === questArr[questCount].rightAnswer) {
        result.innerText = "Correct! 😎";
        time += 10;
    } 
    else {
        result.innerText = "Sorry! Wrong answer 😒";
        time -= 10;
        if (time <= 0) {
            time = 0
            timer.innerText = time;
            gameOver();
            return;
        }
    }

    questCount++
    clearQuiz();
    if (questArr.length <= questCount) {
        gameOver();
        return;
    }
    getQuest();
    footer.appendChild(result);
};

var clearQuiz = function() {
    askQuestion.innerHTML = "";
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    };
};

var getQuest = function () {
    askQuestion.innerText = questArr[questCount].question;

    var btnA = document.createElement("button");
    var btnB = document.createElement("button");
    var btnC = document.createElement("button");
    var btnD = document.createElement("button");

    btnA.innerText = questArr[questCount].choiceA;
    btnB.innerText = questArr[questCount].choiceB;
    btnC.innerText = questArr[questCount].choiceC;
    btnD.innerText = questArr[questCount].choiceD;

    btnA.addEventListener("click", checkAnswer);
    btnB.addEventListener("click", checkAnswer);
    btnC.addEventListener("click", checkAnswer);
    btnD.addEventListener("click", checkAnswer);

    answers.appendChild(btnA);
    answers.appendChild(btnB);
    answers.appendChild(btnC);
    answers.appendChild(btnD);
};


var startQuiz = function (event) {
    event.target.remove();
    answers.classList.remove("text-center");
    intervalId = setInterval(function () {
        time--
        timer.innerText = time
        if (time === 0) {
            endQuiz();
            }
        }, 1000);

        clearQuiz();
        getQuest();
    };

startButton.addEventListener("click", startQuiz);