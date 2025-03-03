import { expect, test } from "vitest";

import { hello } from "../example.js";

test("hello", () => {
  expect(hello("World")).toBe("Hello World!");
});
