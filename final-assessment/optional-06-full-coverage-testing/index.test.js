import { test, expect } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Penjumlahan dua angka positif", () => {
  const result = sum(5, 3);
  assert.strictEqual(result, 8);
});

test("Penjumlahan angka positif dan nol", () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5);
});

test("Penjumlahan nol dan angka positif", () => {
  const result = sum(0, 5);
  assert.strictEqual(result, 5);
});

test("Penjumlahan dengan angka negatif", () => {
  const result = sum(-5, 3);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dengan angka negatif dan nol", () => {
  const result = sum(-5, 0);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dua angka negatif", () => {
  const result = sum(-5, -3);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dengan string", () => {
  const result = sum("5", 3);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dengan objek", () => {
  const result = sum({}, 3);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dengan array", () => {
  const result = sum([], 3);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dengan boolean true", () => {
  const result = sum(true, 3);
  assert.strictEqual(result, 0);
});

test("Penjumlahan dengan boolean false", () => {
  const result = sum(false, 3);
  assert.strictEqual(result, 0);
});
