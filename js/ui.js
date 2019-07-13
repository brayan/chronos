const clockView = document.getElementById("clock");

function showTimer(timer) {
    clockView.innerText = formatTimer(timer);
}

function formatTimer(timer) {
    const minutes = addZeroIfNeeded(timer.minutes);
    const seconds = addZeroIfNeeded(timer.seconds);
    return `${minutes}:${seconds}`;
}

function addZeroIfNeeded(timer) {
    if (timer >= 0 & timer < 10) {
        return "0" + timer;
    } else {
        return timer;
    }
}