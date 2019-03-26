export type Unit = (n: number) => string;

export const unit = (unit: string) => (n: number) => `${n}${unit}`;
export const TransformedUnit = (
  valueTransform: (n: number) => number,
  unit: Unit,
) => (n: number) => unit(valueTransform(n));

// Absolute lengths

/**
 * CSS Pixel length unit
 *
 * 1/96 of an inch, not necessarily equal to a device pixel
 */
export const px = unit("px");
/**
 * Point (pt) length unit
 *
 * 1pt = 1/72 of an inch
 */
export const pt = unit("pt");
/**
 * Point (pc) length unit
 *
 * 1 pica = 12pt = 16px
 */
export const pc = unit("pc");
/**
 * 1in = 72in = 96pt = 2.54cm = 25.4mm
 */
export const inch = unit("in");
/**
 * 1in = 2.54cm
 */
export const cm = unit("cm");
/**
 * 1cm = 10mm
 */
export const mm = unit("mm");

// Relative lengths

/**
 * Relative to font-size of the root element
 */
export const rem = unit("rem");
/**
 * Relative to the font-size of the element (2em means 2 times the size of the current font)
 */
export const em = unit("em");
/**
 * Relative to the x-height of the current font (rarely used)
 */
export const ex = unit("ex");
/**
 * Relative to the width of the "0" glyph used to render the font
 */
export const ch = unit("ch");

/**
 * Converts the number directly to percent, i.e. simplePercentage(100) = 100%
 */
export const simplePercentage = unit("%");
/**
 * Converts the number mathematically corret to percent, i.e. percentage(1) = 100%
 */
export const percentage = TransformedUnit((n) => n * 100, simplePercentage);

/**
 * Relative to 1% of the width of the viewport*
 * Viewport = the browser window size. If the viewport is 48cm wide, 1vw = 0.48cm.
 */
export const vw = unit("vw");
/**
 * Relative to 1% of the height of the viewport*
 * Viewport = the browser window size. If the viewport is 27cm tall, 1vh = 0.27cm.
 */
export const vh = unit("vh");
/**
 * Relative to 1% of the viewport's smaller dimenstion*
 * Viewport = the browser window size. If the viewport is 48cm wide and 27cm tall, 1vmin = 0.27cm.
 */
export const vmin = unit("vmin");
/**
 * Relative to 1% of the viewport's larger dimenstion*
 * Viewport = the browser window size. If the viewport is 48cm wide and 27cm tall, 1vmax = 0.48cm.
 */
export const vmax = unit("vmax");

/**
 * Unit of free space in a grid
 */
export const fr = unit("fr");

// Angle units

export const deg = unit("deg");
export const grad = unit("grad");
export const rad = unit("rad");
export const turns = unit("turn");

// Time units

export const s = unit("s");
export const ms = unit("ms");
export const µs = TransformedUnit((n) => n / 1000, ms);
export const min = TransformedUnit((n) => n * 60, s);
export const hours = TransformedUnit((n) => n * 60, min);

// Frequency units

export const hz = unit("Hz");
export const kHz = unit("kHz");
