
var startTime = 30
var time = startTime
var intervalId

console.log(startTime);



var timerEl = document.getElementById("timer")

function startTimer() {
    console.log('Starting timer...')

    setInterval(function() {
        time--
        timerEl.innerText= time
    }, 1000)
}

startTimer()
