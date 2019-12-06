import { createTimer, timerStatus } from "./domain";

describe("Timer in progress", () => {

    it("should create a timer in progress minimum (14:00:00)", () => {
        const timer = createTimer(new DateMock(14, 0, 0))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(50)
        expect(timer.seconds).toBe(0)
        expect(timer.progress).toBe(0)
        expect(timer.status).toBe(timerStatus.IN_PROGRESS)
    });

    it("should create a timer in progress that is halfway through (14:20:30)", () => {
        const timer = createTimer(new DateMock(14, 20, 30))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(29)
        expect(timer.seconds).toBe(30)
        expect(timer.progress).toBe(41)
        expect(timer.status).toBe(timerStatus.IN_PROGRESS)
    });

    it("should create a timer in progress maximum (14:39:59)", () => {
        const timer = createTimer(new DateMock(14, 39, 59))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(10)
        expect(timer.seconds).toBe(1)
        expect(timer.progress).toBe(79.97)
        expect(timer.status).toBe(timerStatus.IN_PROGRESS)
    });

});


describe("Timer in progress that is in the last minutes", () => {

    it("should create a timer in progress that is in the last minutes minimum (14:40:00)", () => {
        const timer = createTimer(new DateMock(14, 40, 0))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(10)
        expect(timer.seconds).toBe(0)
        expect(timer.progress).toBe(80)
        expect(timer.status).toBe(timerStatus.LAST_MINUTES)
    });

    it("should create a timer in progress that is in the last minutes that is halfway through (14:44:30)", () => {
        const timer = createTimer(new DateMock(14, 44, 30))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(5)
        expect(timer.seconds).toBe(30)
        expect(timer.progress).toBe(89)
        expect(timer.status).toBe(timerStatus.LAST_MINUTES)
    });

    it("should create a timer in progress that is in the last minutes maximum (14:49:59)", () => {
        const timer = createTimer(new DateMock(14, 49, 59))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(0)
        expect(timer.seconds).toBe(1)
        expect(timer.progress).toBe(99.97)
        expect(timer.status).toBe(timerStatus.LAST_MINUTES)
    });

});

describe("Timer in the break", () => {

    it("should create a timer in the break minimum (14:50:00)", () => {
        const timer = createTimer(new DateMock(14, 50, 0))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(10)
        expect(timer.seconds).toBe(0)
        expect(timer.progress).toBe(0)
        expect(timer.status).toBe(timerStatus.BREAK)
    });

    it("should create a timer in the break that is halfway through (14:55:30)", () => {
        const timer = createTimer(new DateMock(14, 55, 30))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(4)
        expect(timer.seconds).toBe(30)
        expect(timer.progress).toBe(55)
        expect(timer.status).toBe(timerStatus.BREAK)
    });

    it("should create a timer in the break maximum (14:59:59)", () => {
        const timer = createTimer(new DateMock(14, 59, 59))

        expect(timer.sprint).toBe(14)
        expect(timer.minutes).toBe(0)
        expect(timer.seconds).toBe(1)
        expect(timer.progress).toBe(99.83)
        expect(timer.status).toBe(timerStatus.BREAK)
    });

});


class DateMock {

    constructor(hours, minutes, seconds) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    getSeconds() {
        return this.seconds
    }

    getMinutes() {
        return this.minutes
    }

    getHours() {
        return this.hours
    }

}