function createTimer(clock) {
    let minutes = 0;
    let seconds = 0;

    if (isInProgress(clock)) {
        minutes = 59 - clock.getMinutes();
    } else {
        minutes = 9 - clock.getMinutes();
    }

    seconds = 60 - clock.getSeconds();

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    const sprint = clock.getHours();

    return { sprint, minutes, seconds };
}

function isInProgress(clock) {
    return (clock.getMinutes() >= 10 && clock.getMinutes() <= 59);
}