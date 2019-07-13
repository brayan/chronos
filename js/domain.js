function createTimer(clock) {
    let minutes = 0;
    let seconds = 0;

    if (clock.getMinutes() >= 0 && clock.getMinutes() < 10) {
        minutes = 9 - clock.getMinutes();
    }

    if (clock.getMinutes() >= 10 && clock.getMinutes() <= 59) {
        minutes = 59 - clock.getMinutes();
    }

    seconds = 60 - clock.getSeconds();

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    return { minutes, seconds };
}