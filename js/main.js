startTimer();

function startTimer() {
    const timer = createTimer(new Date());
    setViews(timer);
    setTimeout(startTimer, 1000);
}