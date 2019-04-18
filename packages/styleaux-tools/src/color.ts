// from https://github.com/typestyle/csx/blob/master/src/color.ts

import { ColorProperty, NamedColor } from '@styleaux/csstype'

export const round = Math.round

export function roundFloat(n: number, factor: number): number {
  return round(n * factor) / factor
}

const functionExpression = /[\s]*([a-z-]+)[\s]*\([\s]*([^\)]+)[\s]*\)[\s]*/i
const floatExpression = /^(\-?\d+\.?\d{0,5})/
const toFloat = parseFloat

function ensurePercent(value: string | number): number {
  return typeof value === 'number' ? (value as number) : toFloat(value) * 0.01
}

function formatPercent(value: number): string {
  return formatFloat(value * 100) + '%'
}
function formatFloat(n: number) {
  return floatExpression.exec(n.toString())![1]
}

function parseCSSFunction(stringValue: string): string[] | undefined {
  const matches = functionExpression.exec(stringValue)
  if (!matches || !matches.length) {
    return undefined
  }
  return [matches[1]].concat(matches[2].split(','))
}

function cssFunction(
  functionName: string,
  params: Array<string | number>,
): string {
  const parts = params.join(',')
  return `${functionName}(${parts})`
}

const RGB = 'rgb',
  HSL = 'hsl'

const converters = {
  [RGB + HSL]: RGBtoHSL,
  [HSL + RGB]: HSLtoRGB,
}

/**
 * Describe the ceiling for each color channel for each format
 */
const maxChannelValues = {
  r: 255,
  g: 255,
  b: 255,
  h: 360,
  s: 1,
  l: 1,
  a: 1,
}

/**
 * Creates a color from a hex color code or named color.
 * e.g. color('red') or color('#FF0000') or color('#F00'))
 */
export function color(value: ColorProperty): ColorHelper {
  return (
    parseHexCode(value) ||
    parseColorFunction(value) ||
    (NAMED_COLORS[value] && parseNumberCode(NAMED_COLORS[value])) ||
    rgb(255, 0, 0)!
  )
}

/**
 * Creates a color from hue, saturation, and lightness.  Alpha is automatically set to 100%
 */
export function hsl(
  hue: number,
  saturation: string | number,
  lightness: string | number,
): ColorHelper {
  return new ColorHelper(
    HSL,
    modDegrees(hue),
    ensurePercent(saturation),
    ensurePercent(lightness),
    1,
    false,
  )
}

/**
 * Creates a color from hue, saturation, lightness, and alpha
 */
export function hsla(
  hue: number,
  saturation: string | number,
  lightness: string | number,
  opacity: string | number,
): ColorHelper {
  return new ColorHelper(
    HSL,
    modDegrees(hue),
    ensurePercent(saturation),
    ensurePercent(lightness),
    ensurePercent(opacity),
    true,
  )
}

/**
 * Creates a color form the red, blue, and green color space.  Alpha is automatically set to 100%
 */
export function rgb(red: number, blue: number, green: number): ColorHelper {
  return new ColorHelper(RGB, red, blue, green, 1, false)
}

/**
 * Creates a color form the red, blue, green, and alpha in the color space
 */
export function rgba(
  red: number,
  blue: number,
  green: number,
  alpha: string | number,
): ColorHelper {
  return new ColorHelper(RGB, red, blue, green, ensurePercent(alpha), true)
}

function convertHelper(
  toFormat: 'rgb' | 'hsl',
  helper: ColorHelper | any,
  forceAlpha?: boolean,
): ColorHelper {
  const { f: fromFormat, r, g, b, a } = helper
  const newAlpha = forceAlpha === undefined ? helper.o : forceAlpha
  if (fromFormat !== toFormat) {
    return converters[fromFormat + toFormat](r, g, b, a, newAlpha)
  }
  return forceAlpha === undefined
    ? helper
    : new ColorHelper(fromFormat, r, g, b, a, newAlpha)
}

interface StringType<T extends string> {
  toString(): T
}

/**
 * A CSS Color.  Includes utilities for converting between color types
 */
export class ColorHelper implements StringType<ColorProperty> {
  /**
   * Format of the color
   * @private
   */
  private f: 'rgb' | 'hsl'
  /**
   * True if the color should output opacity in the formatted result
   * @private
   */
  private o: boolean
  /**
   * Channel 0
   * @private
   */
  private r: number
  /**
   * Channel 1
   * @private
   */
  private g: number
  /**
   * Channel 2
   * @private
   */
  private b: number
  /**
   * Channel Alpha
   * @private
   */
  private a: number

  constructor(
    format: 'rgb' | 'hsl',
    r: number,
    g: number,
    b: number,
    a: number,
    hasAlpha: boolean,
  ) {
    this.f = format
    this.o = hasAlpha

    const isHSL = format === HSL
    this.r = clampColor(isHSL ? 'h' : 'r', r)
    this.g = clampColor(isHSL ? 's' : 'g', g)
    this.b = clampColor(isHSL ? 'l' : 'b', b)
    this.a = clampColor('a', a)
  }

  /**
   * Converts the stored color into string form (which is used by Free Style)
   */
  public toString(): ColorProperty {
    const { o: hasAlpha, f: format, r, g, b, a } = this

    let fnName: string
    let params: (number | string)[]

    // find function name and resolve first three channels
    if (format === RGB) {
      fnName = hasAlpha ? 'rgba' : RGB
      params = [round(r), round(g), round(b)]
    } else if (format === HSL) {
      fnName = hasAlpha ? 'hsla' : HSL
      params = [
        round(r),
        formatPercent(roundFloat(g, 100)),
        formatPercent(roundFloat(b, 100)),
      ]
    } else {
      throw new Error('Invalid color format')
    }

    // add alpha channel if needed
    if (hasAlpha) {
      params.push(formatFloat(roundFloat(a, 100000)))
    }

    // return as a string
    return cssFunction(fnName, params)
  }

  /**
   * Converts to hex rgb(255, 255, 255) to #FFFFFF
   */
  public toHexString(): string {
    const color = convertHelper(RGB, this)
    return (
      '#' + (toHex(color.r) + toHex(color.g) + toHex(color.b)).toUpperCase()
    )
  }

  /**
   * Converts to the Hue, Saturation, Lightness color space
   */
  public toHSL(): ColorHelper {
    return convertHelper(HSL, this, false)
  }

  /**
   * Converts to the Hue, Saturation, Lightness color space and adds an alpha channel
   */
  public toHSLA(): ColorHelper {
    return convertHelper(HSL, this, true)
  }

  /**
   * Converts to the Red, Green, Blue color space
   */
  public toRGB(): ColorHelper {
    return convertHelper(RGB, this, false)
  }

  /**
   * Converts to the Red, Green, Blue color space and adds an alpha channel
   */
  public toRGBA(): ColorHelper {
    return convertHelper(RGB, this, true)
  }

  public red(): number {
    return (this.f === RGB ? this : this.toRGB()).r
  }

  public green(): number {
    return (this.f === RGB ? this : this.toRGB()).g
  }

  public blue(): number {
    return (this.f === RGB ? this : this.toRGB()).b
  }

  public hue(): number {
    return (this.f === HSL ? this : this.toHSL()).r
  }

  public saturation(): number {
    return (this.f === HSL ? this : this.toHSL()).g
  }

  public lightness(): number {
    return (this.f === HSL ? this : this.toHSL()).b
  }

  public alpha(): number {
    return this.a
  }

  public opacity(): number {
    return this.a
  }
  /**
   * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
   *
   *
   *
   */
  public transparentize(percent: string | number): ColorHelper {
    return this.fade(percent)
  }

  public invert(): ColorHelper {
    const color2 = convertHelper(RGB, this)
    return convertHelper(
      this.f,
      new ColorHelper(
        RGB,
        255 - color2.r,
        255 - color2.g,
        255 - color2.b,
        this.a,
        this.o,
      ),
    )
  }

  public lighten(percent: string | number, relative?: boolean): ColorHelper {
    const color2 = convertHelper(HSL, this)
    const max = maxChannelValues.l
    const l =
      color2.b + (relative ? max - color2.b : max) * ensurePercent(percent)
    return convertHelper(
      this.f,
      new ColorHelper(HSL, color2.r, color2.g, l, this.a, this.o),
    )
  }

  public darken(percent: string | number, relative?: boolean): ColorHelper {
    const color2 = convertHelper(HSL, this)
    const l =
      color2.b -
      (relative ? color2.b : maxChannelValues.l) * ensurePercent(percent)
    return convertHelper(
      this.f,
      new ColorHelper(HSL, color2.r, color2.g, l, this.a, this.o),
    )
  }

  public saturate(percent: string | number, relative?: boolean): ColorHelper {
    const color2 = convertHelper(HSL, this)
    const max = maxChannelValues.s
    const s =
      color2.g + (relative ? max - color2.g : max) * ensurePercent(percent)
    return convertHelper(
      this.f,
      new ColorHelper(HSL, color2.r, s, color2.b, this.a, this.o),
    )
  }

  public desaturate(percent: string | number, relative?: boolean): ColorHelper {
    const color2 = convertHelper(HSL, this)
    const max = maxChannelValues.s
    const s = color2.g - (relative ? color2.g : max) * ensurePercent(percent)
    return convertHelper(
      this.f,
      new ColorHelper(HSL, color2.r, s, color2.b, this.a, this.o),
    )
  }

  public grayscale() {
    return this.desaturate(1)
  }

  public fade(percent: string | number): ColorHelper {
    const a = clampColor('a', ensurePercent(percent))
    return convertHelper(
      this.f,
      new ColorHelper(this.f, this.r, this.g, this.b, a, true),
    )
  }

  public fadeOut(percent: string | number, relative?: boolean): ColorHelper {

    const max = 1
    const a = clampColor(
      'a',
      this.a - (relative ? this.a : max) * ensurePercent(percent),
    )
    return convertHelper(this.f, new ColorHelper(this.f, this.r, this.g, this.b, a, true))
  }

  public fadeIn(percent: string | number, relative?: boolean): ColorHelper {
    const max = 1
    const a = clampColor(
      'a',
      this.a + (relative ? this.a : max) * ensurePercent(percent),
    )
    return convertHelper(this.f, new ColorHelper(this.f, this.r, this.g, this.b, a, true))
  }

  public mix(mixin: string | ColorHelper, weight?: number): ColorHelper {

    const color2 = ensureColor(mixin)
    const g = convertHelper(RGB, this)
    const b = convertHelper(RGB, color2)
    const p = weight === undefined ? 0.5 : weight
    const w = 2 * p - 1
    const a = Math.abs(g.a - b.a)
    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0
    const w2 = 1 - w1

    const helper = new ColorHelper(
      RGB,
      round(g.r * w1 + b.r * w2),
      round(g.g * w1 + b.g * w2),
      round(g.b * w1 + b.b * w2),
      g.a * p + b.a * (1 - p),
      this.o || color2.o,
    )

    return convertHelper(this.f, helper)
  }
  /**
   * Mixes White with color. The mix ratio is a value between 0 and 1.
   */
  public tint(weight: number): ColorHelper {
    return rgb(255, 255, 255).mix(this, weight)
  }

  /**
   * Mixes Black with color. The mix ratio is a value between 0 and 1.
   */
  public shade(weight: number): ColorHelper {
    return rgb(0, 0, 0).mix(this, weight)
  }
  /**
   * Changes the hue by x number degrees
   */
  public spin(degrees: number): ColorHelper {
    const color2 = convertHelper(HSL, this)
    return convertHelper(
      this.f,
      new ColorHelper(
        HSL,
        modDegrees(color2.r + degrees),
        color2.g,
        color2.b,
        this.a,
        this.o,
      ),
    )
  }
}

function toHex(n: number): string {
  const i = round(n)
  return (i < 16 ? '0' : '') + i.toString(16)
}

const modFloor = (modulus: number) => (a: number) =>
  ((a % modulus) + modulus) % modulus

const modDegrees = modFloor(360)

function RGBtoHSL(
  r: number,
  g: number,
  b: number,
  a: number,
  hasAlpha: boolean,
): ColorHelper {
  const newR = r / 255
  const newG = g / 255
  const newB = b / 255
  const min = Math.min(newR, newG, newB)
  const max = Math.max(newR, newG, newB)
  const l = (min + max) / 2
  const delta = max - min

  let h: number
  if (max === min) {
    h = 0
  } else if (newR === max) {
    h = (newG - newB) / delta
  } else if (newG === max) {
    h = 2 + (newB - newR) / delta
  } else if (newB === max) {
    h = 4 + (newR - newG) / delta
  } else {
    h = 0
  }

  h = Math.min(h * 60, 360)

  if (h < 0) {
    h += 360
  }

  let s: number
  if (max === min) {
    s = 0
  } else if (l <= 0.5) {
    s = delta / (max + min)
  } else {
    s = delta / (2 - max - min)
  }

  return new ColorHelper(HSL, h, s, l, a, hasAlpha)
}

function HSLtoRGB(
  r: number,
  g: number,
  b: number,
  a: number,
  hasAlpha: boolean,
): ColorHelper {
  const newH = r / 360
  const newS = g
  const newL = b

  if (newS === 0) {
    const val = newL * 255
    return new ColorHelper(RGB, val, val, val, a, hasAlpha)
  }

  const t2 = newL < 0.5 ? newL * (1 + newS) : newL + newS - newL * newS
  const t1 = 2 * newL - t2

  let newR = 0,
    newG = 0,
    newB = 0
  for (let i = 0; i < 3; i++) {
    let t3 = newH + (1 / 3) * -(i - 1)
    if (t3 < 0) {
      t3++
    }
    if (t3 > 1) {
      t3--
    }

    let val: number
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3
    } else if (2 * t3 < 1) {
      val = t2
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
    } else {
      val = t1
    }
    val *= 255

    // manually set variables instead of using an array
    if (i === 0) {
      newR = val
    } else if (i === 1) {
      newG = val
    } else {
      newB = val
    }
  }

  return new ColorHelper(RGB, newR, newG, newB, a, hasAlpha)
}

function clampColor(
  channel: keyof typeof maxChannelValues,
  value: number,
): number {
  const min = 0
  const max = maxChannelValues[channel]
  return value < min ? min : value > max ? max : value
}

function ensureColor(c: string | ColorHelper): ColorHelper {
  return c instanceof ColorHelper ? (c as ColorHelper) : color(c as string)
}

function parseHexCode(stringValue: string): ColorHelper | undefined {
  const match = stringValue.match(/#(([a-f0-9]{6})|([a-f0-9]{3}))$/i)
  if (!match) {
    return undefined
  }

  const hex = match[1]
  const hexColor = parseInt(
    hex.length === 3
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex,
    16,
  )
  const r = (hexColor >> 16) & 0xff
  const b = (hexColor >> 8) & 0xff
  const g = hexColor & 0xff

  return new ColorHelper(RGB, r, b, g, 1, false)
}

function parseColorFunction(colorString: string): ColorHelper | undefined {
  const cssParts = parseCSSFunction(colorString)
  if (!cssParts || !(cssParts.length === 4 || cssParts.length === 5)) {
    return undefined
  }

  const fn = cssParts[0]
  const isRGBA = fn === 'rgba'
  const isHSLA = fn === 'hsla'
  const isRGB = fn === RGB
  const isHSL = fn === HSL
  const hasAlpha = isHSLA || isRGBA

  let type: 'rgb' | 'hsl'
  if (isRGB || isRGBA) {
    type = RGB
  } else if (isHSL || isHSLA) {
    type = HSL
  } else {
    throw new Error('unsupported color string')
  }

  const r = toFloat(cssParts[1])
  const g = isRGB || isRGBA ? toFloat(cssParts[2]) : ensurePercent(cssParts[2])
  const b = isRGB || isRGBA ? toFloat(cssParts[3]) : ensurePercent(cssParts[3])
  const a = hasAlpha ? toFloat(cssParts[4]) : 1

  return new ColorHelper(type, r, g, b, a, hasAlpha)
}

const parseNumberCode = (a: number) => {
  const r = (a >> 16) & 0xff
  const b = (a >> 8) & 0xff
  const g = a & 0xff
  return new ColorHelper(RGB, r, b, g, 1, false)
}
type NC = Record<string, number> & { [K in Exclude<NamedColor, 'transparent'>]: number }

const NAMED_COLORS: NC = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32,
}

