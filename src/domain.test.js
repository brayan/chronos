import { createTimer, statusTypes } from "./domain";

describe("Timer in progress", () => {

    it("should create a timer in progress minimum (14:00:00)", () => {
        const date = new DateMock(14, 0, 0);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(50);
        expect(timer.seconds).toBe(0);
        expect(timer.status).toBe(statusTypes.IN_PROGRESS);
    });

    it("should create a timer in progress that is halfway through (14:20:30)", () => {
        const date = new DateMock(14, 20, 30);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(29);
        expect(timer.seconds).toBe(30);
        expect(timer.status).toBe(statusTypes.IN_PROGRESS);
    });

    it("should create a timer in progress maximum (14:39:59)", () => {
        const date = new DateMock(14, 39, 59);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(10);
        expect(timer.seconds).toBe(1);
        expect(timer.status).toBe(statusTypes.IN_PROGRESS);
    });

});


describe("Timer in progress that is in the last minutes", () => {

    it("should create a timer in progress that is in the last minutes minimum (14:40:00)", () => {
        const date = new DateMock(14, 40, 0);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(10);
        expect(timer.seconds).toBe(0);
        expect(timer.status).toBe(statusTypes.LAST_MINUTES);
    });

    it("should create a timer in progress that is in the last minutes that is halfway through (14:44:30)", () => {
        const date = new DateMock(14, 44, 30);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(5);
        expect(timer.seconds).toBe(30);
        expect(timer.status).toBe(statusTypes.LAST_MINUTES);
    });

    it("should create a timer in progress that is in the last minutes maximum (14:49:59)", () => {
        const date = new DateMock(14, 49, 59);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(0);
        expect(timer.seconds).toBe(1);
        expect(timer.status).toBe(statusTypes.LAST_MINUTES);
    });

});

describe("Timer in the break", () => {

    it("should create a timer in the break minimum (14:50:00)", () => {
        const date = new DateMock(14, 50, 0);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(10);
        expect(timer.seconds).toBe(0);
        expect(timer.status).toBe(statusTypes.BREAK);
    });

    it("should create a timer in the break that is halfway through (14:55:30)", () => {
        const date = new DateMock(14, 55, 30);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(4);
        expect(timer.seconds).toBe(30);
        expect(timer.status).toBe(statusTypes.BREAK);
    });

    it("should create a timer in the break maximum (14:59:59)", () => {
        const date = new DateMock(14, 59, 59);
        const timer = createTimer(date);

        expect(timer.sprint).toBe(14);
        expect(timer.minutes).toBe(0);
        expect(timer.seconds).toBe(1);
        expect(timer.status).toBe(statusTypes.BREAK);
    });

});


class DateMock {

    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    getSeconds() {
        return this.seconds;
    }

    getMinutes() {
        return this.minutes;
    }

    getHours() {
        return this.hours;
    }

}