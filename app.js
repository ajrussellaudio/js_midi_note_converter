const notemidi = require('./note-midi');

const scales = [
  [ 'D2', 'A2', 'D3', 'G3', 'A3', 'C#4', 'D4' ],
  [ 'F3', 'Ab3', 'C4', 'Db4', 'Eb4', 'F4', 'Ab4' ],
  [ 'B2', 'B3', 'E4', 'A4', 'B4', 'E5' ],
  [ 'B2', 'F#3', 'A#3', 'B3', 'D#4', 'F#4' ],
  [ 'C3', 'F4', 'Bb3', 'D4', 'Eb4', 'G3' ]
];

const scaleDegrees = scales.map(scale => {
  return scale.map(note => {
    return notemidi(note);
  });
})

console.log(scaleDegrees)