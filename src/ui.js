import { statusTypes, createTimer } from "./domain";

const COLOR_IN_PROGRESS = "#80b3ff";
const COLOR_LAST_MINUTES = "#ff8080";
const COLOR_BREAK = "#37c8ab";

const sprintView = document.getElementById("sprint");
const statusView = document.getElementById("status");
const minutesView = document.getElementById("minutes");
const secondsView = document.getElementById("seconds");

export default function setViews(date) {
    const timer = createTimer(date);
    setSprint(timer);
    setStatus(timer);
    setTimer(timer);
    setColors(timer);
}

function setSprint(timer) {
    sprintView.innerText = `Sprint ${addZeroIfNeeded(timer.sprint)}`;
}

function setStatus(timer) {
    switch (timer.status) {
        case statusTypes.IN_PROGRESS:
            statusView.innerText = "In progress";
            break;

        case statusTypes.LAST_MINUTES:
            statusView.innerText = "In progress (last minutes)";
            break;

        default:
            statusView.innerText = "Break";
    }
}

function setTimer(timer) {
    minutesView.innerText = addZeroIfNeeded(timer.minutes);
    secondsView.innerText = addZeroIfNeeded(timer.seconds);
}

function setColors(timer) {
    switch (timer.status) {
        case statusTypes.IN_PROGRESS:
            setTextColor(COLOR_IN_PROGRESS);
            break;

        case statusTypes.LAST_MINUTES:
            setTextColor(COLOR_LAST_MINUTES);
            break;

        default:
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