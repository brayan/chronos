function createTimer(date) {
    let minutes = 0;
    let seconds = 0;

    if (isInProgress(date)) {
        minutes = 49 - date.getMinutes();
    } else {
        minutes = 59 - date.getMinutes();
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
    return (date.getMinutes() >= 0 && date.getMinutes() < 50);
}

function isInTheLastMinutesOfTheSprint(timer, date) {
    const { minutes, seconds } = timer;
    return isInProgress(date) && ((minutes < 10) || (minutes == 10 && seconds == 0));
}

class DateMock {

    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    getSeconds() {
        return this.seconds;
    }

    getMinutes() {
        return this.minutes;
    }

    getHours() {
        return this.hours;
    }

} 