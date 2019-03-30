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

import { position } from '../position';

describe('position', () => {
  it('should return a function', () => {
    const result = position();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `position` as component and css prop', () => {
    const result = position()({ position: 'inherit' });
    expect(toStyles(result)).toEqual({ position: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = position<'a'>()({ position: 'a' });
    expect(toStyles(result)).toEqual({ position: 'a' });
  });

  it('should use an interface which marks `position` as optional', () => {
    const result = position<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = position<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ position: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      position: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = position<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      position: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      position: 'a',
      [MQ.D]: {
        position: 'b',
      },
      [MQ.T]: {
        position: 'c',
      },
      [MQ.M]: {
        position: 'd',
      },
    });
  });
});