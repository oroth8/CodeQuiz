var startBtn = document.querySelector("#start");
var display = document.querySelector("#time");
startBtn.addEventListener("click", startTimer);
var disQuestion = document.querySelector("#question");
var qA = document.querySelector("#A");
var qB = document.querySelector("#B");
var qC = document.querySelector("#C");
var qD = document.querySelector("#D");
var quiz = [
    {q: "question question question?????",
     options:["A","B","C","D"],
    answer: 1}
]

function startTimer() {
    var duration = 60*15;
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function startQuiz(){

}

function displayQuestion(){
    disQuestion.textContent = quiz[0].q;

}

displayQuestion();

function displayOptions(){
    qA.textContent = quiz[0].options[0];
    console.log(qA);

}

displayOptions();