import {
  ch,
  cm,
  deg,
  em,
  ex,
  fr,
  grad,
  hz,
  inch,
  kHz,
  mm,
  ms,
  pc,
  pt,
  px,
  rad,
  rem,
  s,
  simplePercentage,
  turns,
  vh,
  vmax,
  vmin,
  vw,
} from '../basics';

const basicFuncs = {
  px,
  pt,
  pc,
  in: inch,
  cm,
  mm,
  rem,
  em,
  ex,
  ch,
  '%': simplePercentage,
  vw,
  vh,
  vmin,
  vmax,
  fr,
  deg,
  turn: turns,
  s,
  ms,
  Hz: hz,
  kHz,
  grad,
  rad,
};

test.each(Object.entries(basicFuncs))('%s', (name, fn) => {
  expect(fn(1)).toEqual(1 + name);
});
