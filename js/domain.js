function createTimer(date) {
    let minutes = 0;
    let seconds = 0;

    if (isInProgress(date)) {
        minutes = 59 - date.getMinutes();
    } else {
        minutes = 9 - date.getMinutes();
    }

    seconds = 60 - date.getSeconds();

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    const sprint = date.getHours();

    return { sprint, minutes, seconds };
}

function isInProgress(date) {
    return (date.getMinutes() >= 10 && date.getMinutes() <= 59);
}