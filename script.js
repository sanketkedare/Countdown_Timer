// Selectors
const addTimerButton = document.getElementById("addTimer");
const targetDateInput = document.getElementById("targetDate");
const timersContainer = document.getElementById("timersContainer");

// Function to create a new countdown timer
function createTimer(targetDateTime) {
  const timerId = `timer-${Date.now()}`;

  // Create HTML structure for a timer
  const timerDiv = document.createElement("div");
  timerDiv.className = "timer";
  timerDiv.id = timerId;
  timerDiv.innerHTML = `
    <h3>Countdown Timer</h3>
    <p class="time-remaining">Loading...</p>
    <button onclick="removeTimer('${timerId}')">Remove Timer</button>
  `;
  timersContainer.appendChild(timerDiv);

  // Start the countdown
  startCountdown(targetDateTime, timerId);
}

// Function to start the countdown
function startCountdown(targetDateTime, timerId) {
  const timerElement = document.getElementById(timerId);
  const timeDisplay = timerElement.querySelector(".time-remaining");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDateTime).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      clearInterval(interval);
      timeDisplay.textContent = "Time's up!";
      return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the time display
    timeDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

// Function to remove a timer
function removeTimer(timerId) {
  const timerElement = document.getElementById(timerId);
  timerElement.remove();
}

// Add new timer on button click
addTimerButton.addEventListener("click", () => {
  const targetDate = targetDateInput.value;

  if (!targetDate) {
    alert("Please select a target date and time!");
    return;
  }

  createTimer(targetDate);
  targetDateInput.value = ""; // Clear the input
});
