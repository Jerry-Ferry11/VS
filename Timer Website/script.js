let timerElement = document.getElementById('timer');
let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let intervalid;
let seconds = 120; // 2 minutes in seconds
let isTimerRunning = false;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {

    if (isTimerRunning) {
        return;
    }

    startButton.disabled = true;
    isTimerRunning = true;

    if (seconds === 0) {
        seconds = 120;
        timerElement.textContent = formatTime(seconds);
    }

     intervalid = setInterval(
        () => {
            seconds--;
            timerElement.textContent = formatTime(seconds);
            if (seconds === 0) {
                clearInterval(intervalid);
                startButton.disabled = false;
                isTimerRunning = false;
            }
        }, 1000);
}

function stopTimer() {
    clearInterval(intervalid);
    startButton.disabled = false;
    isTimerRunning = false;
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return minutes + ":" + remainingSeconds.toString().padStart(2, '0');
}