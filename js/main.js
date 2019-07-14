startTimer();

function startTimer() {
    const date = new Date();
    const timer = createTimer(date);
    setViews(timer, date);
    setTimeout(startTimer, 1000);
}