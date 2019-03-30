import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { translate } from '../translate';

describe('translate', () => {
  it('should return a function', () => {
    const result = translate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `translate` as component and css prop', () => {
    const result = translate()({ translate: 'inherit' });
    expect(toStyles(result)).toEqual({ translate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = translate<'a'>()({ translate: 'a' });
    expect(toStyles(result)).toEqual({ translate: 'a' });
  });

  it('should use an interface which marks `translate` as optional', () => {
    const result = translate<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = translate<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ translate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      translate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = translate<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      translate: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      translate: 'a',
      [MQ.D]: {
        translate: 'b',
      },
      [MQ.T]: {
        translate: 'c',
      },
      [MQ.M]: {
        translate: 'd',
      },
    });
  });
});
