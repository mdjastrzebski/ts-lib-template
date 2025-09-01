import { expect, test } from "bun:test";

import { hello } from "../example.js";

test("hello", () => {
  expect(hello("World")).toBe("Hello World!");
});
