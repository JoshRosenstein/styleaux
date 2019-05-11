import { pxToEm } from './units/px-to';
import { isArray, isNumber, isString } from 'typed-is';
import {
  always,
  cond,
  equals,
  flow,
  join,
  map,
  propOr,
  T,
  toKebabCase,
  toPairs,
} from '@roseys/futils';

const sizingKeys = [
  'min',
  'max',
  'minW',
  'maxW',
  'minH',
  'maxH',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
];

const isSizeVariable = (x: string) => sizingKeys.includes(x);

export interface ToMqInputAsObj {
  min?: string | number;
  max?: string | number;
  minW?: string | number;
  maxW?: string | number;
  minH?: string | number;
  maxH?: string | number;
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height
  height?: string;
  minHeight?: string | number;
  maxHeight?: string | number;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio
  aspectRatio?: string;
  minAspectRatio?: string;
  maxAspectRatio?: string;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation
  orientation?: 'portrait' | 'landscape';

  'max-width'?: string | number;
  'max-height'?: string | number;
  'min-width'?: string | number;
  'min-height'?: string | number;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution
  resolution?: string;
  minResolution?: string;
  maxResolution?: string;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scan
  scan?: 'interlace' | 'progressive';
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid
  grid?: 0 | 1;
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update-frequency
  update?: 'none' | 'slow' | 'fast';
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block
  overflowBlock?: 'none' | 'scroll' | 'optional-paged' | 'paged';
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline
  overflowInline?: 'none' | 'scroll';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color
  color?: number | true;
  minColor?: number | true;
  maxColor?: number | true;
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut
  colorGamut?: 'srgb' | 'p3' | 'rec2020';
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-index
  colorIndex?: number | true;
  minColorIndex?: number | true;
  maxColorIndex?: number | true;
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode
  displayMode?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome
  monochrome?: number | true;
  minMonochrome?: number | true;
  maxMonochrome?: number | true;
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors
  invertedColors?: 'none' | 'inverted';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer
  pointer?: 'none' | 'coarse' | 'fine';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover
  hover?: 'none' | 'hover';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer
  anyPointer?: 'none' | 'coarse' | 'fine';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover
  anyHover?: 'none' | 'hover';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/light-level
  lightLevel?: 'dim' | 'normal' | 'washed';

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting
  scripting?: 'none' | 'initial-only' | 'enabled';

  handheld?: boolean;
  screen?: boolean;
  print?: boolean;
  all?: boolean;

  'aspect-ratio'?: string;

  maxaspectRatio?: string;
  'max-aspect-ratio'?: string;
}
const nameLookups = {
  min: 'min-width',
  max: 'max-width',
  minW: 'min-width',
  maxW: 'max-width',
  minH: 'min-height',
  maxH: 'max-height',
};

const isAtRule = (selector: string): boolean => selector.indexOf('@') === 0;

export const isMediaReady = (selector: string): boolean =>
  selector.indexOf('(') === 0;

const prefixMedia = (value: string) => `@media ${value}`;

export function toMq(
  input: ToMqInputAsObj | ToMqInputAsObj[] | number | string,
  unitConverter = pxToEm,
): string {
  if (isString(input)) {
    if (isAtRule(input)) {
      return input;
    }
    // Handle media theme Prop
    if (isMediaReady(input)) {
      return prefixMedia(input);
    }
  }

  const objParser = (obj: ToMqInputAsObj): string => {
    const fn = ([feature, value]: any[]) => {
      const formattedFeature = toKebabCase(
        propOr(feature, feature, nameLookups),
      );
      const covertedValue =
        isNumber(value) && isSizeVariable(feature)
          ? unitConverter(value)
          : value;
      return cond([
        [equals(true), always(formattedFeature)],
        [equals(false), always(`not ${formattedFeature}`)],
        [T, (temp: any) => `(${formattedFeature}:${temp})`],
      ])(covertedValue);
    };
    /// TODO: fix types
    return flow(
      obj as {},
      toPairs,
      map(fn),
      join(' and '),
    );
  };

  if (isString(input) || isNumber(input)) {
    return prefixMedia(
      objParser({ screen: true, minWidth: unitConverter(input) }),
    );
  }

  if (isArray(input)) {
    return prefixMedia(input.map(objParser).join(', '));
  }
  /// Must be object
  return prefixMedia(objParser(input));
}
