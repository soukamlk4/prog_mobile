let sessionLength = 25;
let breakLength = 5;
let timeLeft = sessionLength * 60;
let isRunning = false;
let isSession = true;
let timer;

const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("start-pause");
const resetBtn = document.getElementById("reset");
const sessionLengthDisplay = document.getElementById("session-length");
const breakLengthDisplay = document.getElementById("break-length");
const sessionTitle = document.getElementById("session-title");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                isSession = !isSession;
                sessionTitle.textContent = isSession ? "SESSION" : "BREAK";
                timeLeft = isSession ? sessionLength * 60 : breakLength * 60;
                updateDisplay();
            }
        }, 1000);
        startPauseBtn.textContent = "Pause";
    } else {
        clearInterval(timer);
        isRunning = false;
        startPauseBtn.textContent = "Start";
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isSession = true;
    sessionTitle.textContent = "SESSION";
    sessionLength = 25;
    breakLength = 5;
    timeLeft = sessionLength * 60;
    updateDisplay();
    startPauseBtn.textContent = "Start";
    sessionLengthDisplay.textContent = sessionLength;
    breakLengthDisplay.textContent = breakLength;
}

document.querySelectorAll(".increment, .decrement").forEach(button => {
    button.addEventListener("click", (event) => {
        if (isRunning) return;

        const type = event.target.getAttribute("data-type");

        if (type === "session") {
            sessionLength = event.target.classList.contains("increment") ? sessionLength + 1 : Math.max(1, sessionLength - 1);
            sessionLengthDisplay.textContent = sessionLength;
            if (isSession) {
                timeLeft = sessionLength * 60;
                updateDisplay();
            }
        } else if (type === "break") {
            breakLength = event.target.classList.contains("increment") ? breakLength + 1 : Math.max(1, breakLength - 1);
            breakLengthDisplay.textContent = breakLength;
        }
    });
});

startPauseBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
