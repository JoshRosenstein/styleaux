import { DeepRequired } from '../types';
import { ColorProperty } from '@styleaux/csstype';
import { assertTrue, Equals } from 'typescript-test-utils';
import {
  style,
  styler,
  GetValue,
  Arg1,
  DeepSimplify,
  StyleOptions,
  ResponsiveProp,
} from '../';

const COLOR = 'color';

export interface ColorProps<T = ColorProperty> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color: T;
}

export interface Props {
  [key: string]: any;
}

export type Key = string;
export type Keys = Key[];
export type Nil = null | undefined;

export const getKey = <P extends Props>(props: P, keys?: Keys): string | Nil =>
  keys && keys.find((k) => props[k] != null);

export const getValue = <P extends Props>(props: P, keys?: Keys) => {
  const k = getKey(props, keys);
  return k && props[k];
};

//let value = getValue({ a: 1, b: 2 }, ['a']);

export const createColor = <T = ColorProperty, Media = never, Theme = never>({
  key,
  transformValue,
}: Partial<StyleOptions<ColorProps<T>, Theme>> = {}) =>
  style<ColorProps<T>, Theme, Media>({
    prop: 'color',
    cssProp: 'color',
    key,
    transformValue,
  });

export const createColorRule = <T = ColorProperty>(
  transformer?: GetValue<T, any>,
) => styler<T, any>({ cssProp: COLOR, getValue: transformer });

export const color = createColor();

export const colorRule = createColorRule();

it('no theme or media', () => {
  type Style = typeof color;

  type StylePropType = DeepSimplify<Arg1<Style>>;
  type ExpectedPropType = {
    color?: ResponsiveProp<ColorProperty>;
    theme?: any;
  };

  assertTrue<Equals<StylePropType, ExpectedPropType>>();
});

it('withMedia', () => {
  //type Media={sm:string,md:string}

  const style = createColor<'ColorProperty', { sm: 'a'; md: 'a'; lg: 'a' }>({
    prop: 'color',
  });

  type Style = typeof style;

  type StylePropType = DeepRequired<Arg1<Style>>;
  type ExpectedPropType = DeepRequired<{
    color:
      | 'ColorProperty'
      | 'ColorProperty'[]
      | {
          sm: 'ColorProperty';
          md: 'ColorProperty';
          lg: 'ColorProperty';
          all: 'ColorProperty';
        };
    theme: any;
  }>;

  assertTrue<Equals<StylePropType, ExpectedPropType>>();
});
