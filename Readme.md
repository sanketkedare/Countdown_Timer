# Countdown Timer Web Application

## Objective
The goal of this project is to create a countdown timer web application using HTML, CSS, and JavaScript. This timer allows users to set a specific date and time in the future, and it will count down to that moment, displaying the remaining time in days, hours, minutes, and seconds.

## Features
1. **Set Countdown Timer**:
   - Users can input a target date and time.
   - The timer accurately counts down to the specified moment.

2. **Multiple Countdown Timers**:
   - Users can add multiple timers on the same page.
   - Each timer operates independently.

3. **Real-Time Updates**:
   - The countdown updates dynamically in real-time using JavaScript's `setInterval` function.

4. **Remove Timer Option**:
   - Users can delete individual timers when no longer needed.

5. **Visually Appealing Design**:
   - Styled with CSS for a clean, responsive, and user-friendly interface.

6. **Optional Enhancements**:
   - Add sound or visual effects when the timer reaches zero (not yet implemented).

---

## Steps to Run the Project

### 1. Clone the Repository
```bash
git clone <repository_url>
cd countdown-timer
```

### 2. Open in Browser
- Open the `index.html` file in any modern web browser to run the application.

---

## Project Structure
```
countdown-timer/
│
├── index.html      # HTML structure of the application
├── styles.css      # CSS styles for visual design
├── script.js       # JavaScript logic for timer functionality
└── README.md       # Documentation
```

---

## How It Works

### HTML Structure
The application includes:
- A heading for the timer.
- An input field to set the target date and time.
- A button to add timers.
- A container to display all active timers.

### CSS Styling
- The interface is styled with responsive design principles to ensure it looks good on all devices.
- Individual timers are displayed in visually distinct cards with proper spacing and alignment.

### JavaScript Functionality
1. **Adding a Timer**:
   - Users input a target date and time and click "Add Timer."
   - A new timer card is dynamically added to the page.

2. **Countdown Logic**:
   - The difference between the current time and the target time is calculated.
   - The time is displayed in days, hours, minutes, and seconds.
   - The countdown updates every second using `setInterval`.

3. **Removing a Timer**:
   - Each timer has a "Remove Timer" button to delete it from the page.

---

## Code Example

### Adding Multiple Countdown Timers (JavaScript)
```javascript
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

function createTimer(targetDateTime) {
  const timerId = `timer-${Date.now()}`; // Unique ID for each timer

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
```

---

## Future Enhancements
1. Add sound or visual effects when the timer reaches zero.
2. Include animations for timer cards when added or removed.
3. Allow users to edit existing timers.

