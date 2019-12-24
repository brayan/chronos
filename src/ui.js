import { createTimer, timerStatus } from "./domain"

const COLOR_IN_PROGRESS = "#80B3FF"
const COLOR_LAST_MINUTES = "#FF8080"
const COLOR_BREAK = "#37C8AB"

const minutesView = document.getElementById("minutes")
const secondsView = document.getElementById("seconds")
const style = document.documentElement.style

export default function setViews(date) {
    const timer = createTimer(date)
    setTimer(timer)
    setColors(timer)
    setProgress(timer)
    setFontSize(timer)
}

function setTimer(timer) {
    minutesView.innerText = addZeroIfNeeded(timer.minutes)
    secondsView.innerText = addZeroIfNeeded(timer.seconds)
}

function setColors(timer) {
    switch (timer.status) {
        case timerStatus.IN_PROGRESS:
            setStatusColor(COLOR_IN_PROGRESS)
            break

        case timerStatus.LAST_MINUTES:
            setStatusColor(COLOR_LAST_MINUTES)
            break

        default:
            setStatusColor(COLOR_BREAK)
    }
}

function setProgress(timer) {
    style.setProperty("--progress", timer.progress)
}

function setFontSize(timer) {
    if (timer.minutes == 0) {
        setMinutesFontSize("0rem")
    } else {
        setMinutesFontSize("5rem")
    }
}

function addZeroIfNeeded(timer) {
    return (timer >= 0 && timer < 10) ? ("0" + timer) : timer
}

function setStatusColor(color) {
    style.setProperty("--color-status", color)
}

function setMinutesFontSize(fontSize) {
    style.setProperty("--font-size-minutes", fontSize)
}