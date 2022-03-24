
var startTime = 30
var time = startTime
var intervalId

// The quiz questions were obtained from the W3 Schools JavaScript Quiz.

// W3 Schools. 1999-2022. JavaScript Quiz. https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS


var questionArr = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<js>",
        choiceB: "<script>",
        choiceC: "<scripting>",
        choiceD: "<javascript>",
        correctAnswer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA: "The <body> section",
        choiceB: "The <head> section",
        choiceC: "The <footer> section",
        choiceD: "Both A and B are correct",
        correctAnswer: "Both A and B are correct"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choiceA: "msg('Hello World');",
        choiceB: "alert('Hello World');",
        choiceC: "msgBox('Hello World');",
        choiceD: "alertBox('Hello World');",
        correctAnswer: "alert('Hello World');"
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "function myFunction()",
        choiceB: "abracaFunction()",
        choiceC: "function = myFunction()",
        choiceD: "function:myFunction()",
        correctAnswer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choiceA: "call myFunction()",
        choiceB: "abracaFunction()",
        choiceC: "myFunction()",
        choiceD: "call function myFunction()",
        correctAnswer: "myFunction()"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choiceA: "'This is a comment",
        choiceB: "//This is a comment",
        choiceC: "**This is a comment",
        choiceD: "<!--This is a comment-->",
        correctAnswer: "//This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choiceA: "var colors = ['red', 'green', 'blue']",
        choiceB: "var colors= (1:'red', 2:'green', 3:'blue')",
        choiceC: "var colors = 'red', 'green', 'blue'",
        choiceD: "var colors = 1= ('red'), 2 = ('green'), 3 = ('blue')",
        correctAnswer: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choiceA: "v carName;",
        choiceB: "variable carName;",
        choiceC: "abracarName;'",
        choiceD: "var carName;",
        correctAnswer: "var carName;"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choiceA: "-",
        choiceB: "=",
        choiceC: "X",
        choiceD: "*",
        correctAnswer: "="
    },
    {
        question: "What will the following code return: Boolean(10>9)",
        choiceA: "NaN",
        choiceB: "true",
        choiceC: "false",
        choiceD: "404 not found",
        correctAnswer: "true"
    },

];

var timerEl = document.getElementById("timer")

function startTimer() {
    console.log('Starting timer...')

    setInterval(function() {
        time--
        timerEl.innerText= time
    }, 1000)
}

startTimer()
