describre("Statistics", () => {
    describe("average with empty array", () => {
        test("should return 0 for an empty array", () => {
            expect(statistics.average([])).toBe(0);
        });
    });

    describe("average", () => {
        test("should return the average of an array of numbers", () => {
            expect(statistics.average([2, 4, 6])).toBe(4);
            expect(statistics.average([10, 20, 30, 40])).toBe(25);
        });
    });
});
