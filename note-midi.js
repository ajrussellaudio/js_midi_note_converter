module.exports = (note) => {
  return octave(note) * 12 + degree(note);
}

function degree(note) {
  const pitches = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return pitches.indexOf(flatToSharp(pitchClass(note)));
}

function pitchClass(note) {
  return isSharpOrFlat(note) ? firstChars(2, note) : firstChars(1, note)
}

function isSharpOrFlat(note) {
  return isSharp(note) || isFlat(note);
}

function octave(note) {
  return parseInt(midiOctave(note)) + 2;
}

function midiOctave(note) {
  return octaveIsNegative(note) ? lastChars(2, note) : lastChars(1, note)
}

function octaveIsNegative(note) {
  return note[note.length - 2] === "-";
}

function flatToSharp(note) {
  return sharp(note) ? sharp(note) : note
}

function sharp(note) {
  const enharmonics = { Bb: 'A#', Db: 'C#', Eb: 'D#', Gb: 'F#', Ab: 'G#' };
  return enharmonics[note];
}

function firstChars(count, string) {
  return string.substr(0, count);
}

function lastChars(count, string) {
  return string.substr(count * -1);
}

function isSharp(note) {
  return note[1] === "#";
}

function isFlat(note) {
  return note[1] === "b";
}