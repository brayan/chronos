startTimer();

function startTimer() {
    const clock = new Date();
    const timer = createTimer(clock);

    updateViews(timer, clock);
    setTimeout(startTimer, 1000);
}