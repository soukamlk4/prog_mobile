let sessionLength = 25;
let breakLength = 5;
let timeLeft = sessionLength * 60;
let isRunning = false;
let isSession = true;
let timer;

const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("start-pause");
const resetBtn = document.getElementById("reset");
const sessionTitle = document.getElementById("session-title");
const taskNotes = document.getElementById("task-notes");

// Update the timer display format
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Start or Pause the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                // Switch between session and break
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

// Reset the timer to initial values
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
}

// Event listeners for start, pause, and reset buttons
startPauseBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display on page load
updateDisplay();
