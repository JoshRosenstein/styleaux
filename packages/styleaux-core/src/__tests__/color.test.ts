import * as AUX from '../types';
import * as UT from 'utility-types';
import * as TU from 'typescript-test-utils';
import { ResponsiveProp } from '../';
import { toStyles } from '../__testutils__/index';
import {
  createColor,
  ColorProperty,
  createTextColor,
} from '../__testutils__/fixtures/color';
type DeepRequiredEquals<A, B> = TU.Equals<
  UT.DeepRequired<A>,
  UT.DeepRequired<B>
>;

test('A', () => {
  const style = createTextColor();
  type styleProps = AUX.DeepSimplify<AUX.Arg1<typeof style>>;
  type ExpectedStyleProps = {
    color?: ResponsiveProp<ColorProperty>;
    theme?: any;
  };

  TU.assertTrue<DeepRequiredEquals<styleProps, ExpectedStyleProps>>();

  expect(style({})).toEqual([]);
});
const theme = { colors: { red1: 'customRed', blue2: 'customBlue' } };

type Extends<A, B> = A extends B ? true : false;

// @ts-ignore
export const Ttest = (_name: string = '') => <T extends true>() => {};

test('createColor', () => {
  const style = createColor<typeof theme, never, 'colors'>();
  type rProps = AUX.DeepSimplify<AUX.Arg1<typeof style>>;
  type eProps = Partial<{
    bg: string;
    color: string;
    theme: typeof theme;
    backgroundColor: string;
  }>;
  type SameKeys = Extends<keyof rProps, keyof eProps>;
  TU.assertTrue<SameKeys>();

  Ttest('SameKeys')<Extends<keyof rProps, keyof eProps>>();

  const e = style({ color: 'blue2', bg: 'red1', theme });
  expect(toStyles(e)).toEqual({
    backgroundColor: 'customRed',
    color: 'customBlue',
  });
});
