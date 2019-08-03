export const statusTypes = {
    IN_PROGRESS: 0,
    LAST_MINUTES: 1,
    BREAK: 2
};

export function createTimer(date) {
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
    const status = getStatus(date, { minutes, seconds });

    return { sprint, status, minutes, seconds };
}

function getStatus(date, timer) {
    if (isInTheLastMinutesOfTheSprint(date, timer)) {
        return statusTypes.LAST_MINUTES;

    } else if (isInProgress(date)) {
        return statusTypes.IN_PROGRESS;

    } else {
        return statusTypes.BREAK;
    }
}

function isInProgress(date) {
    return (date.getMinutes() >= 0 && date.getMinutes() < 50);
}

function isInTheLastMinutesOfTheSprint(date, timer) {
    const { minutes, seconds } = timer;
    return isInProgress(date) && ((minutes < 10) || (minutes == 10 && seconds == 0));
}