const notemidi = require('./note-midi');

test("C3 is note 60", () => {
  expect(notemidi("C3")).toBe(60);
});

test("C-2 is note 0", () => {
  expect(notemidi("C-2")).toBe(0);
});

test("F#3 is note 66", () => {
  expect(notemidi("F#3")).toBe(66);
});

test("F#-2 is note 6", () => {
  expect(notemidi("F#-2")).toBe(6);
});

test("Ab2 is note 56", () => {
  expect(notemidi("Ab2")).toBe(56);
});

test("Ab-2 is note 8", () => {
  expect(notemidi("Ab-2")).toBe(8);
});