import setViews from "./ui"

registerServiceWorker()
startTimer()

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./service-worker.js")
        })
    }
}

function startTimer() {
    setViews(new Date())
    setTimeout(startTimer, 1000)
}