import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("test sum function", () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(5, 7), 12);
  assert.strictEqual(sum(2.5, 3.5), 6);
});
