const statistics = require("../src/statistics");

describe("Statistics", () => {
  describe("average", () => {
    it("should return 0 for an empty array", () => {
      expect(statistics.average([])).toBe(0);
    });

    it("should return the average of an array of numbers", () => {
      expect(statistics.average([2, 4, 6])).toBe(4);
      expect(statistics.average([10, 20, 30, 40])).toBe(25);
    });
  });

  describe("min", () => {
    it("should return 0 for an empty array", () => {
      expect(statistics.min([])).toBe(0);
    });

    it("should return the minimum of an array of numbers", () => {
      expect(statistics.min([2, 4, 6])).toBe(2);
      expect(statistics.min([10, 20, 30, 40])).toBe(10);
    });
  });

  describe("max", () => {
    it("should return 0 for an empty array", () => {
      expect(statistics.max([])).toBe(0);
    });

    it("should return the maximum of an array of numbers", () => {
      expect(statistics.max([2, 4, 6])).toBe(6);
      expect(statistics.max([10, 20, 30, 40])).toBe(40);
    });
  });
});
