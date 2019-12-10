import setViews from "./ui"

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
    })
}

startTimer()

function startTimer() {
    setViews(new Date())
    setTimeout(startTimer, 1000)
}