const midiNote = require('./midi-note');

test("Note 60 is C3", () => {
  expect(midiNote(60)).toBe("C3");
});

test("Note 0 is C-2", () => {
  expect(midiNote(0)).toBe("C-2");
});

test("Note 6 is F#-2", () => {
  expect(midiNote(6)).toBe("F#-2");
});

test("Note 69 is A3", () => {
  expect(midiNote(69)).toBe("A3");
});