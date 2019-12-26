export const timerStatus = {
    IN_PROGRESS: 0,
    LAST_MINUTES: 1,
    BREAK: 2
}

export function createTimer(date) {
    let minutes = 0
    let seconds = 0

    if (isInProgress(date)) {
        minutes = 49 - date.getMinutes()
    } else {
        minutes = 59 - date.getMinutes()
    }

    seconds = 60 - date.getSeconds()

    if (seconds == 60) {
        seconds = 0
        minutes++
    }

    const status = getStatus(date, { minutes, seconds })
    const progress = calculateProgress(date)

    return { status, minutes, seconds, progress }
}

function getStatus(date, timer) {
    if (isInTheLastMinutesOfTheSprint(date, timer)) {
        return timerStatus.LAST_MINUTES

    } else if (isInProgress(date)) {
        return timerStatus.IN_PROGRESS

    } else {
        return timerStatus.BREAK
    }
}

function isInProgress(date) {
    return (date.getMinutes() >= 0 && date.getMinutes() < 50)
}

function isInTheLastMinutesOfTheSprint(date, timer) {
    const { minutes, seconds } = timer
    return isInProgress(date) && ((minutes < 10) || (minutes == 10 && seconds == 0))
}

function calculateProgress(date) {
    let progress = 0
    if (isInProgress(date)) {
        let progressSeconds = (date.getMinutes() * 60) + date.getSeconds()
        progress = (progressSeconds * 100) / 3000
    } else {
        let progressSeconds = ((date.getMinutes() - 50) * 60) + date.getSeconds()
        progress = (progressSeconds * 100) / 600
    }

    return round(progress)
}

function round(value) {
    return Math.round(value * 100) / 100
}