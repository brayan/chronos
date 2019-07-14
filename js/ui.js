const COLOR_IN_PROGRESS = "#80b3ff";
const COLOR_BREAK = "#37c8ab";
const COLOR_LAST_10_MINUTES = "#ff8080";

const sprintView = document.getElementById("sprint");
const statusView = document.getElementById("status");
const minutesView = document.getElementById("minutes");
const secondsView = document.getElementById("seconds");

function setViews(date) {
    const timer = createTimer(date);
    setSprint(timer);
    setStatus(timer, date);
    setTimer(timer);
    setColors(timer, date);
}

function setSprint(timer) {
    sprintView.innerText = `Sprint ${addZeroIfNeeded(timer.sprint)}`;
}

function setStatus(timer, date) {
    if (isInProgress(date) && timer.minutes < 10) {
        statusView.innerText = "In progress (last minutes)";

    } else if (isInProgress(date)) {
        statusView.innerText = "In progress";

    } else {
        statusView.innerText = "Break";
    }
}

function setTimer(timer) {
    minutesView.innerText = addZeroIfNeeded(timer.minutes);
    secondsView.innerText = addZeroIfNeeded(timer.seconds);
}

function setColors(timer, date) {
    if (isInProgress(date) && timer.minutes < 10) {
        setTextColor(COLOR_LAST_10_MINUTES);

    } else if (isInProgress(date)) {
        setTextColor(COLOR_IN_PROGRESS);
        
    } else {
        setTextColor(COLOR_BREAK);
    }
}

function setTextColor(color) {
    statusView.style.color = color;
    minutesView.style.color = color;
    secondsView.style.color = color;
}

function addZeroIfNeeded(timer) {
    return (timer >= 0 && timer < 10) ? ("0" + timer) : timer;
}