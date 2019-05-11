import { createVerticalAlign } from '../verticalAlign';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createVerticalAlign', () => {
  it('should return a function', () => {
    const result = createVerticalAlign();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createVerticalAlign` as component and css prop', () => {
    const result = createVerticalAlign()({ verticalAlign: 'inherit' });
    expect(toStyles(result)).toEqual({ verticalAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createVerticalAlign<'a'>()({ verticalAlign: 'a' });
    expect(toStyles(result)).toEqual({ verticalAlign: 'a' });
  });

  it('should use an interface which marks `createVerticalAlign` as optional', () => {
    const result = createVerticalAlign<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createVerticalAlign<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ verticalAlign: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      verticalAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createVerticalAlign<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()(
      {
        verticalAlign: {
          all: 'a',
          D: 'b',
          T: 'c',
          M: 'd',
        },
        theme,
      },
    );
    expect(toStyles(result)).toEqual({
      verticalAlign: 'a',
      [MQ.D]: {
        verticalAlign: 'b',
      },
      [MQ.T]: {
        verticalAlign: 'c',
      },
      [MQ.M]: {
        verticalAlign: 'd',
      },
    });
  });
});
