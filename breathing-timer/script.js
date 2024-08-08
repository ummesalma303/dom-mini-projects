let timeLeft;
let timerInterval;
let timerDisplay = document.querySelector('.timer');
let startBtn = document.querySelector('.start-btn');
let stopBtn = document.querySelector('.stop-btn');
let isRunning = false;
const startTimer = (duration)=>{
    let timer = duration;

    timerInterval = setInterval(() => {
       const minutes = parseInt(timer / 60, 10);
       const seconds = parseInt(timer % 60, 10);
       
       const displayMinutes = minutes < 10 ? '0'+ minutes : minutes;
       const displaySeconds = seconds < 10 ? '0'+ seconds : seconds;
        timerDisplay.textContent = displayMinutes + ":" + displaySeconds; 

        if (--timer < 0 ) {
           clearInterval(timerInterval);
           timerDisplay.textContent = 'Breathing Out';

           setTimeout(() => {
            timerDisplay.textContent = "Breath In";
            startTimer(timeLeft)
           }, 400);
        }

     }, 1000);

}
startBtn.addEventListener('click',()=>{
    if (!isRunning) {
        timeLeft = 90;
        startTimer(timeLeft);
        isRunning = true;
    }
})
stopBtn.addEventListener('click',()=>{
    clearInterval(timerInterval);
    timerDisplay.textContent = "Breath In";
    isRunning = false;
})