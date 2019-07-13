startTimer();

function startTimer() {
    const timer = createTimer(new Date());
    showTimer(timer);
    setTimeout(startTimer, 1000);
}