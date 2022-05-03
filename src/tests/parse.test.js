const { parseInput } = require("../parser.ts");

describe("Checking function parseInput", () => {
  test("Should return 66*(12-2) = 660", () => {
    const num = parseInput("66*(12-2)");
    expect(num).toEqual(660);
  });

  test("Should return 66*(12-2)*2 = 1320", () => {
    const num = parseInput("66*(12-2)*2");
    expect(num).toEqual(1320);
  });
});
