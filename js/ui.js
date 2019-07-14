const minutesView = document.getElementById("minutes");
const secondsView = document.getElementById("seconds");
const sprintView = document.getElementById("sprint");
const statusView = document.getElementById("status");

const COLOR_IN_PROGRESS = "#80b3ff";
const COLOR_RESTING = "#37c8ab";
const COLOR_LAST_10_MINUTES = "#ff8080";

function updateViews(timer, clock) {
    showSprint(timer, clock);
    showTimer(timer, clock);
    showStatus(timer, clock);
}

function showTimer(timer, clock) {
    minutesView.innerText = addZeroIfNeeded(timer.minutes);
    secondsView.innerText = addZeroIfNeeded(timer.seconds);

    if (isInProgress(clock) && timer.minutes < 10) {
        minutesView.style.color = COLOR_LAST_10_MINUTES;
        secondsView.style.color = COLOR_LAST_10_MINUTES;
    } else if (isInProgress(clock)) {
        minutesView.style.color = COLOR_IN_PROGRESS;
        secondsView.style.color = COLOR_IN_PROGRESS;
    } else {
        minutesView.style.color = COLOR_RESTING;
        secondsView.style.color = COLOR_RESTING;
    }
}

function showSprint(timer, clock) {
    sprintView.innerText = `Sprint ${addZeroIfNeeded(timer.sprint)}`
}

function showStatus(timer, clock) {
    if (isInProgress(clock) && timer.minutes < 10) {
        statusView.innerText = "In progress (last minutes)";
        statusView.style.color = COLOR_LAST_10_MINUTES;
    } else if (isInProgress(clock)) {
        statusView.innerText = "In progress";
        statusView.style.color = COLOR_IN_PROGRESS;
    } else {
        statusView.innerText = "Break";
        statusView.style.color = COLOR_RESTING;
    }
}

function addZeroIfNeeded(timer) {
    if (timer >= 0 & timer < 10) {
        return "0" + timer;
    } else {
        return timer;
    }
}