export type ToUnit = (n: number) => string;

export const toUnit = (unit: string) => (n: number) => `${n}${unit}`;

export const unit = (
  val?: null | string | number | undefined,
  unitFunction = toUnit('px'),
): string | undefined | null | 0 =>
  val && (typeof val === 'number' ? unitFunction(val) : val);

export const TransformedUnit = (
  valueTransform: (n: number) => number,
  unitFn: ToUnit,
) => (n: number) => unitFn(valueTransform(n));

// Absolute lengths

/**
 * CSS Pixel length unit
 *
 * 1/96 of an inch, not necessarily equal to a device pixel
 */
export const px = toUnit('px');
/**
 * Point (pt) length unit
 *
 * 1pt = 1/72 of an inch
 */
export const pt = toUnit('pt');
/**
 * Point (pc) length unit
 *
 * 1 pica = 12pt = 16px
 */
export const pc = toUnit('pc');
/**
 * 1in = 72in = 96pt = 2.54cm = 25.4mm
 */
export const inch = toUnit('in');
/**
 * 1in = 2.54cm
 */
export const cm = toUnit('cm');
/**
 * 1cm = 10mm
 */
export const mm = toUnit('mm');

// Relative lengths

/**
 * Relative to font-size of the root element
 */
export const rem = toUnit('rem');
/**
 * Relative to the font-size of the element (2em means 2 times the size of the current font)
 */
export const em = toUnit('em');
/**
 * Relative to the x-height of the current font (rarely used)
 */
export const ex = toUnit('ex');
/**
 * Relative to the width of the "0" glyph used to render the font
 */
export const ch = toUnit('ch');

/**
 * Converts the number directly to percent, i.e. simplePercentage(100) = 100%
 */
export const simplePercentage = toUnit('%');
/**
 * Converts the number mathematically corret to percent, i.e. percentage(1) = 100%
 */
export const percentage = TransformedUnit((n) => n * 100, simplePercentage);

/**
 * Relative to 1% of the width of the viewport*
 * Viewport = the browser window size. If the viewport is 48cm wide, 1vw = 0.48cm.
 */
export const vw = toUnit('vw');
/**
 * Relative to 1% of the height of the viewport*
 * Viewport = the browser window size. If the viewport is 27cm tall, 1vh = 0.27cm.
 */
export const vh = toUnit('vh');
/**
 * Relative to 1% of the viewport's smaller dimenstion*
 * Viewport = the browser window size. If the viewport is 48cm wide and 27cm tall, 1vmin = 0.27cm.
 */
export const vmin = toUnit('vmin');
/**
 * Relative to 1% of the viewport's larger dimenstion*
 * Viewport = the browser window size. If the viewport is 48cm wide and 27cm tall, 1vmax = 0.48cm.
 */
export const vmax = toUnit('vmax');

/**
 * Unit of free space in a grid
 */
export const fr = toUnit('fr');

// Angle units

export const deg = toUnit('deg');
export const grad = toUnit('grad');
export const rad = toUnit('rad');
export const turns = toUnit('turn');

// Time units

export const s = toUnit('s');
export const ms = toUnit('ms');
export const µs = TransformedUnit((n) => n / 1000, ms);
export const min = TransformedUnit((n) => n * 60, s);
export const hours = TransformedUnit((n) => n * 60, min);

// Frequency units

export const hz = toUnit('Hz');
export const kHz = toUnit('kHz');
