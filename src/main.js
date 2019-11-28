import setViews from "./ui"

startTimer()

function startTimer() {
    setViews(new Date())
    setTimeout(startTimer, 1000)
}