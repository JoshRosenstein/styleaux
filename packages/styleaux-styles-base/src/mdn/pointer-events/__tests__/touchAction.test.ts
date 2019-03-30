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

import { touchAction } from '../touchAction';

describe('touchAction', () => {
  it('should return a function', () => {
    const result = touchAction();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `touchAction` as component and css prop', () => {
    const result = touchAction()({ touchAction: 'inherit' });
    expect(toStyles(result)).toEqual({ touchAction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = touchAction<'a'>()({ touchAction: 'a' });
    expect(toStyles(result)).toEqual({ touchAction: 'a' });
  });

  it('should use an interface which marks `touchAction` as optional', () => {
    const result = touchAction<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = touchAction<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ touchAction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      touchAction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = touchAction<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      touchAction: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      touchAction: 'a',
      [MQ.D]: {
        touchAction: 'b',
      },
      [MQ.T]: {
        touchAction: 'c',
      },
      [MQ.M]: {
        touchAction: 'd',
      },
    });
  });
});
