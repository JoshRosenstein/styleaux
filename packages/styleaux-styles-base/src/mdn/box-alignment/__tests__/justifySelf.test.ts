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

import { createJustifySelf } from '../justifySelf';

describe('justifySelf', () => {
  it('should return a function', () => {
    const result = createJustifySelf();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `justifySelf` as component and css prop', () => {
    const result = createJustifySelf()({ justifySelf: 'inherit' });
    expect(toStyles(result)).toEqual({ justifySelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createJustifySelf<'a'>()({ justifySelf: 'a' });
    expect(toStyles(result)).toEqual({ justifySelf: 'a' });
  });

  it('should use an interface which marks `justifySelf` as optional', () => {
    const result = createJustifySelf<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createJustifySelf<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ justifySelf: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      justifySelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createJustifySelf<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      justifySelf: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      justifySelf: 'a',
      [MQ.D]: {
        justifySelf: 'b',
      },
      [MQ.T]: {
        justifySelf: 'c',
      },
      [MQ.M]: {
        justifySelf: 'd',
      },
    });
  });
});
